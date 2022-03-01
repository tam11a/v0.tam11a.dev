import { createTheme } from "@mui/material";

// color palette
const primary = "#FFC107";
const secondary = "#FFFFFF";
const background = "#20202A";
const paper = "#24242F";
const tarnary = "#9E9D9C";

const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: background,
    },
    secondary: {
      main: secondary,
      contrastText: background,
    },
    background: {
      default: background,
      paper: paper,
    },
    tarnary: {
      main: tarnary,
      contrastText: background,
    },
  },
  typography: {
    fontFamily: "agencyFB, sans-serif",

    //fontFamily: "Quicksand, sans-serif",
    allVariants: {
      letterSpacing: 1,
      color: secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
        },
        contained: {
          borderRadius: "2px",
        },
      },
    },
  },
});

theme.typography.agency = {
  fontFamily: "agencyFB, sans-serif",
  fontSize: "2.2rem",
  color: secondary,
};

theme.typography.normal = {
  fontSize: "1rem",
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

export default theme;
