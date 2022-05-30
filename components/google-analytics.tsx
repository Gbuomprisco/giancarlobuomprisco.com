const GoogleAnalyticsScript: React.FC<{ accountId: string }> = ({
  accountId,
}) => {
  const script = getAnalyticsScript(accountId);

  return (
    <>
      <script
        type="text/partytown"
        async
        defer
        src="https://www.googletagmanager.com/gtag/js"
      />

      <script
        type="text/partytown"
        id="gtmDataLayer"
        dangerouslySetInnerHTML={{ __html: script }}
      />
    </>
  );
};

export default GoogleAnalyticsScript;

function getAnalyticsScript(id: string) {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '${id}');
`;
}
