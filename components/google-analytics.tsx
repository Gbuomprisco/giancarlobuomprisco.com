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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-172483071-1"
      ></script>

      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}

export default GoogleAnalyticsScript;
