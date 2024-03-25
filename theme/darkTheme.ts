import { createTheme } from "@mui/material";
import { PRIMARY_COLOR, WHITE_COLOR } from "./varialble";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 680,
      lg: 960,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: "Ubuntu-Medium",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSizeMedium: {
          padding: "15px 22px",
          fontSize: 14,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          // color: LIGHT_GRAY_COLOR,
          fontSize: 14,
          fontWeight: 600,

          "&::placeholder": {
            // color: LIGHT_GRAY_COLOR,
            fontSize: 14,
            fontWeight: 600,
          },
        },
      },
    },
  },
});
