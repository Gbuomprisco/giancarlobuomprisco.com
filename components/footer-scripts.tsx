import { ANALYTICS_ACCOUNT_ID, IS_PRODUCTION } from "../lib/constants";
import GoogleAnalyticsScript from "./google-analytics";

const FooterScripts = () => {
  return (
    <>
      {IS_PRODUCTION ? (
        <GoogleAnalyticsScript accountId={ANALYTICS_ACCOUNT_ID} />
      ) : null}
    </>
  );
};

export default FooterScripts;
