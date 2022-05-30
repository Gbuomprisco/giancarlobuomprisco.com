import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { EMAIL, TITLE } from "../lib/constants";
import CalWidget from "../components/cal-widget";

const Contact = () => {
  const emailHref = `mailto:${EMAIL}`;

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
                <span>or use the widget below:</span>
              </p>
            </div>

            <CalWidget />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
