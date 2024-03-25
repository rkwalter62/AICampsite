import { FacebookOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Breakpoint,
  CssBaseline,
  Stack,
  Toolbar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";
import { CustomContainer } from "components/CustomContainer";
import CustomImage from "components/CustomImage";
import Logo from "components/Logo";
import { Z_INDEX_HEADER } from "theme/varialble";

export const Header = ({ maxWidth }: { maxWidth: Breakpoint }) => {
  return (
    <Box
      sx={{ zIndex: (theme: any) => theme.zIndex.drawer + Z_INDEX_HEADER }}
      className="max-w-full"
    >
      <CssBaseline />
      <AppBar
        position="static"
        component="nav"
        sx={{ boxShadow: "none", top: 0, left: 0 }}
      >
        <CustomContainer>
          <Toolbar className="flex justify-between px-0">
            <div className="relative">
              <Logo href="/" variant="text" />
            </div>
            <Stack direction="row">
              <IconButton>
                <FacebookOutlined className="text-white" fontSize="large" />
              </IconButton>
              <IconButton>
                <CustomImage
                  src={instagramIcon}
                  width="35"
                  height="35"
                  alt="twitter icon"
                />
              </IconButton>
              <IconButton>
                <CustomImage
                  src={twitterIcon}
                  width="35"
                  height="35"
                  alt="twitter icon"
                />
              </IconButton>
            </Stack>
          </Toolbar>
        </CustomContainer>
      </AppBar>
    </Box>
  );
};
