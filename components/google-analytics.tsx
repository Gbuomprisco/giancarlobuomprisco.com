const GoogleAnalyticsScript: React.FC<{ accountId: string }> = ({
  accountId,
}) => {
  const script = getAnalyticsScript(accountId);

  return (
    <>
      <script
        async
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${accountId}`}
      />

      <script
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
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
`;
}
