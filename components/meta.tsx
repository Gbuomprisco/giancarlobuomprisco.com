import Head from "next/head";
import { useRouter } from "next/router";

import * as constants from "../lib/constants";

const Meta = () => {
  const router = useRouter();
  const path = router.asPath;
  const canonical = `${constants.SITE_URL}${path}`;

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
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"true"}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <link rel="canonical" href={canonical} key="canonical" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="theme-color" content={constants.THEME_COLOR} />
      <meta name="author" content={constants.AUTHOR} />

      <meta
        name="description"
        content={constants.MISSION_STATEMENT}
        key="meta:description"
      />

      <meta property="og:title" key="og:title" content={constants.TITLE} />

      <meta
        property="og:description"
        key="og:description"
        content={constants.MISSION_STATEMENT}
      />

      <meta property="og:site_name" content={constants.SITE_NAME} />

      <meta
        key="twitter:title"
        property="twitter:title"
        content={constants.SITE_NAME}
      />

      <meta
        key="twitter:description"
        property="twitter:description"
        content={constants.MISSION_STATEMENT}
      />

      <meta property="twitter:creator" content={constants.TWITTER_HANDLE} />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
