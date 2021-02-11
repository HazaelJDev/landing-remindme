import "../styles/index.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Remind Me</title>
        <meta key="description" name="description" content="Remind Me" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
