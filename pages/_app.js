import "../styles/index.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Otro ejemplo de Next.js</title>
        <meta
          key="description"
          name="description"
          content="Jugando con Next.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
