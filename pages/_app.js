import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz night</title>
        <meta name="title" content="Quiz night" />
        <meta name="description" content="UB Quiz Night" />
        <meta name="keywords" content="nft, marketplace" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.quiznight.mn/`} />
        <meta property="og:title" content="Quiz night" />
        <meta property="og:description" content="UB Quiz Night" />
        <meta
          property="og:image"
          content={"https://www.quiznight.mn/" + "logo.png"}
        />

        <meta property="og:locale" content="id" />

        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://www.quiznight.mn/"} />
        <meta property="twitter:title" content="Quiz night" />
        <meta property="twitter:description" content="Quiz night" />
        <meta
          property="twitter:image"
          content={"https://www.quiznight.mn/" + "logo.png"}
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
