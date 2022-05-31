import { isBrowser } from "../lib/is-browser";

const ClientOnly = ({ children }: React.PropsWithChildren<{}>) => {
  return isBrowser() ? <>{children}</> : null;
};

export default ClientOnly;
