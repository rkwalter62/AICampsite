import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from "./varialble";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu-Light",
          color: "#000",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
  },
});

export default lightTheme;
