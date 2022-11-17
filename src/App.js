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
        }}
      />
      <BrowserRouter basename="">
        <TerminalProvider>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              md={8.7}
              sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
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
