import Document, { Html, Head, Main, NextScript } from "next/document";
import FooterScripts from "../components/footer-scripts";
import { Partytown } from '@builder.io/partytown/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Partytown forward={['dataLayer.push']} />
        </Head>

        <body>
          <Main />
          <NextScript />
          <FooterScripts />
        </body>
      </Html>
    );
  }
}
