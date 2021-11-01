import Head from "next/head";
import * as constants from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Merriweather:wght@300;400;700&display=swap"
      />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="theme-color" content={constants.THEME_COLOR} />

      <meta name="author" content={constants.AUTHOR} />
      <meta property="og:title" content={constants.TITLE} />
      <meta name="description" content={constants.DESCRIPTION} />
      <meta property="og:description" content={constants.DESCRIPTION} />
      <meta property="og:site_name" content={constants.SITE_NAME} />
      <meta property="twitter:title" content={constants.SITE_NAME} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={constants.TWITTER_HANDLE} />
    </Head>
  );
};

export default Meta;
