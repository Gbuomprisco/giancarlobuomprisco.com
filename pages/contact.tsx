import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from 'react';

import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { EMAIL, TITLE } from "../lib/constants";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Contact = () => {
  const [text, setText] = useState("Loading Calendly. Please wait...");

  const onScriptLoaded = () => setText("");
  const emailHref = `mailto:${EMAIL}`;

  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        'url': 'https://calendly.com/gcpsk',
        parentElement: document.getElementById('calendly'),
      });

      onScriptLoaded();
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} | Contact Me</title>
        </Head>

        <Container>
          <MainHeader />

          <Hero>Contact Me</Hero>

          <SubHeading className={'text-center'}>
            Want a consultation or just a chat? Get in touch!
          </SubHeading>

          <div className="flex flex-col space-y-4 my-8">
            <div className="flex flex-col space-y-4">
              <p className="my-4 leading-loose">
                <a
                  href={emailHref}
                  className="pb-1 border-b-4 border-yellow-200 hover:border-yellow-300 font-bold"
                >
                  Send me an email
                </a>{" "}
                <span>or use the Calendly meeting below:</span>
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">{text}</p>

              <div
                id={'calendly'}
                className="calendly-inline-widget flex items-center justify-center"
                style={{ minWidth: "320px", height: "650px" }}
              />

              <Script
                type="text/javascript"
                src={"https://assets.calendly.com/assets/external/widget.js"}
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
