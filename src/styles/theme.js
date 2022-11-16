import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8fcdff",
    },
    secondary: {
      main: "#8fcdff",
      contrastText: "#fff",
    },
    background: {
      default: "#29303E",
    },
  },

  typography: {
    fontFamily: "Alegreya Sans SC, sans-serif",
  },
});

export default theme;
