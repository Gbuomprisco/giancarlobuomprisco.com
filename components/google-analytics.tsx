import Script from "next/script";

function GoogleAnalyticsScript() {
  const env = process.env.NODE_ENV;

  if (env !== "production") return null;

  const script = `
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-172483071-1');
`;

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-172483071-1"
      ></Script>

      <Script
        id="gtmDataLayer"
        dangerouslySetInnerHTML={{ __html: script }}
      ></Script>
    </>
  );
}

export default GoogleAnalyticsScript;
