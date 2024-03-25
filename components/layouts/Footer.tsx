import { FacebookOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import instagramIcon from "assets/icons/black-instagram.svg";
import twitterIcon from "assets/icons/black-twitter.svg";
import { CustomContainer } from "components/CustomContainer";
import CustomImage from "components/CustomImage";
import CustomLink from "components/CustomLink";
import CustomText from "components/CustomText";
import Logo from "components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <CustomContainer className="py-12 lg:py-14">
        <div className="flex justify-between flex-wrap">
          <Logo variant="text" textColor="black" />
          <Stack direction="row" alignItems="center">
            <CustomLink
              className="text-black mr-3 text-lg border-b-2 border-black font-medium"
              href="/"
            >
              Home
            </CustomLink>
            <IconButton>
              <FacebookOutlined className="text-black" fontSize="large" />
            </IconButton>
            <IconButton>
              <CustomImage
                className="text-black"
                src={twitterIcon}
                width="35"
                height="35"
                alt="twitter icon"
              />
            </IconButton>
            <IconButton>
              <CustomImage
                src={instagramIcon}
                width="35"
                height="35"
                alt="twitter icon"
              />
            </IconButton>
          </Stack>
        </div>
        <CustomText className="text-left sm:text-right text-xl pt-3">
          Powered By <span className="text-red-500">AIcampsite</span>
        </CustomText>
      </CustomContainer>
    </footer>
  );
};
