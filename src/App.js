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

function App() {
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
            <BrowserRouter basename="">
              <Header />
              <AppRoutes />
              <Footer />
            </BrowserRouter>
          </Grid>
          <Grid item xs={0} md={3}>
            <Hidden mdDown>
              <Terminal />
            </Hidden>
          </Grid>
        </Grid>
      </TerminalProvider>
    </ThemeProvider>
  );
}

export default App;
