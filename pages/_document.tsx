import Document, { Html, Head, Main, NextScript } from "next/document";
import FooterScripts from "../components/footer-scripts";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
          <FooterScripts />
        </body>
      </Html>
    );
  }
}
