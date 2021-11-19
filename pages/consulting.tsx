import Head from "next/head";
import Link from "next/link";

import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { EMAIL, TITLE } from "../lib/constants";

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} | Consulting Services</title>

          <meta
            key="meta:description"
            name="description"
            content={
              "Specialized consulting about Angular, React, Next, Firebase, NestJS, StencilJS"
            }
          ></meta>
        </Head>

        <Container>
          <MainHeader />

          <div className="max-w-2xl mx-auto leading-loose text-lg">
            <Hero>Consulting</Hero>

            <div className="mt-4">
              <SubHeading>
                <span className=" flex flex-row space-x-4 justify-center items-center">
                  <span
                    style={{ minWidth: "26px", minHeight: "26px" }}
                    className="block rounded-full bg-green-300"
                  ></span>
                  <span>I am currently available for consulting services</span>
                </span>
              </SubHeading>
            </div>

            <div className="flex-col space-y-4 my-12 pb-12">
              <div className="shadow-lg px-6 sm:px-8 md:px-16 py-8 rounded-lg">
                <h3 className="text-xl font-semibold">
                  What can I help you with?
                </h3>

                <ul className="ml-4 mt-4" style={{ listStyle: "circle" }}>
                  <li>
                    Angular: architecture, project set-up, performance tuning
                    and optimization, testing strategy
                  </li>

                  <li>RxJs</li>

                  <li>Next.js and React</li>
                  <li>StencilJS apps and design systems, including Ionic</li>
                  <li>Firebase and Google Cloud Platform (GCP)</li>
                  <li>NestJS</li>
                  <li>TailwindCSS, Material Design</li>
                  <li>Vanilla Typescript and Javascript</li>
                  <li>Code Reviews</li>
                  <li>UI/UX</li>

                  <li>Technical Writing</li>
                  <li>Training/Coaching for any of the above technologies</li>
                </ul>
              </div>

              <div className="my-6 pt-6 flex justify-center">
                <Link href="/contact" passHref>
                  <a className="text-xl font-bold border-b-4 pb-1 border-yellow-200 hover:border-yellow-300">
                    Let&apos;s chat
                  </a>
                </Link>
              </div>

              <div className="my-6 pt-6 flex justify-center">
                <p>
                  <span>Book a slot for a short chat, or simply</span>{" "}
                  <a className="underline" href={`mailto:${EMAIL}`}>
                    send me an email
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default About;
