import { Html, Head, Main, NextScript } from "next/document";
import Header from "../src/components/Header";


export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <title>Portfolio || Tam11a</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#401B60" />
        <meta name="description" content="Portfolio of Ibrahim Sadik Tamim." />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
          
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
