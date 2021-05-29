import { createTheme } from "@material-ui/core/styles";

const primary = "#2196f3";
const secondary = "#ff9800";
const red = "#f44336";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default theme;
