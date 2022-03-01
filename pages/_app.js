import "../styles/globals.css";
import Container from "../src/components/Container";
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning={true}>
      <Head>
        <title>Portfolio || Tam11a</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
          {typeof window === "undefined" ? null : (
            <Container>
              <Component {...pageProps} />
            </Container>
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default MyApp;
