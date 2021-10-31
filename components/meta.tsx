import Head from "next/head";
import * as constants from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon.png"
      />

      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/favicon.png" color="#000000" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta name="msapplication-TileColor" content={constants.THEME_COLOR} />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
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
