import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";

const Contact = () => {
  const [text, setText] = useState("Loading Calendly...");
  const onScriptLoaded = () => setText("");

  return (
    <>
      <Layout>
        <Head>
          <title>Contact Me</title>
        </Head>

        <Container>
          <MainHeader />

          <Hero>Contact Me</Hero>

          <div className="flex flex-col space-y-4 my-16">
            <div className="flex flex-col space-y-4">
              <p>Want a consultation or just a simple chat? Get in touch!</p>
              <p>
                <a href="mailto:giancarlopsk@gmail.com" className="underline">
                  Send me an email
                </a>{" "}
                or use the Calendly meeting below:
              </p>
            </div>

            <div>
              <div
                className="calendly-inline-widget flex items-center justify-center"
                data-url="https://calendly.com/gcpsk"
                style={{ minWidth: "320px", height: "650px" }}
              >
                <span className="text-xl">{text}</span>
              </div>

              <Script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
                defer
                onLoad={onScriptLoaded}
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
