import "../styles/globals.css";
import Container from "../src/components/Container";
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "../styles/theme";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              "*": {
                // Disable Blue Highlight when Touch/Press object with cursor: 'pointer' in Android
                WebkitTapHighlightColor: "transparent",
                textDecoration: "none",
              },
            }}
          />
          <Container>
            {typeof window === "undefined" ? null : (
              <Component {...pageProps} />
            )}
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default MyApp;
