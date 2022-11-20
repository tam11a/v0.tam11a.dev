import React from "react";

// @mui dependency
import {
  CssBaseline,
  GlobalStyles,
  Grid,
  Hidden,
  ThemeProvider,
} from "@mui/material";

// router dependency
import { BrowserRouter } from "react-router-dom";

// context API
import { TerminalProvider } from "./context/Terminal";

// application routes
import AppRoutes from "./routes";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";

// customised theme
import theme from "./styles/theme";

// aos
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "AgencyFB",
            src: "url(/agency-fb.ttf)",
          },
          "@font-face": {
            fontFamily: "Monaco",
            src: "url(/Monaco.woff)",
          },
          "@font-face": {
            fontFamily: "SF Mono",
            src: "url(/sf-mono.woff2)",
          },
          "*": {
            // Disable Blue Highlight when Touch/Press object with cursor: 'pointer' in Android
            WebkitTapHighlightColor: "transparent",
            // scrollbar
            scrollbarWidth: "5px",
            scrollbarHeight: "5px",
            scrollbarColor: `${theme.palette.primary.main} #00000033`,
            outline: "none !important",
          },
          "*::-webkit-scrollbar": {
            height: "5px",
            width: "5px",
          },
          "*::-webkit-scrollbar-track": {
            background: "#00000033",
          },
          "*::-webkit-scrollbar-thumb": {
            background: `${theme.palette.primary.main}aa`,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.main,
          },
          body: {
            overflowX: "hidden",
          },
          // App Body Scrollbar
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#00000033",
          },
          "&::-webkit-scrollbar-thumb": {
            background: `${theme.palette.primary.main}aa`,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.main,
          },
        }}
      />
      <BrowserRouter basename="">
        <TerminalProvider>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <Grid
              item
              sx={{
                flex: 1,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                width: "100%",
              }}
            >
              <Header />
              <AppRoutes />
              <Footer />
            </Grid>
            <Grid item xs={0} md={3}>
              <Hidden mdDown>
                <Terminal />
              </Hidden>
            </Grid>
          </Grid>
        </TerminalProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
