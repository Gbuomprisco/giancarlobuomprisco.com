import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { TITLE } from "../lib/constants";

const Heading: React.FC = ({ children }) => {
  return <h3 className="font-bold text-3xl leading-loose">{children}</h3>;
};

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} | About Me</title>
        </Head>

        <Container>
          <MainHeader />

          <Hero>About Me</Hero>

          <SubHeading className={'text-center'}>The past decade of my life in a web-page</SubHeading>

          <div className="max-w-2xl mx-auto leading-loose text-lg mt-12">
            <div className="flex-col space-y-8 pb-12">
              <div>
                <Heading>TDLR;</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    My name is Giancarlo, and work as a Software Engineer,
                    specialized in writing client-side apps with Typescript,
                    Angular, Firebase, Stencil, and sometimes React.
                  </p>

                  <p>
                    I&apos;m originally from Italy, but spent the largest part
                    of the past decade in London (UK), where I worked for
                    various companies, especially in the financial sector.
                  </p>

                  <p>
                    Due to Covid and other personal reasons, I&apos;ve recently
                    returned to Italy, temporarily.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2021</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    After finalizing my project at Tradeweb at the end of the
                    year, I decided to take a break from full-time consulting.
                  </p>

                  <p>
                    Both the project, my relocation back to Italy and a
                    distressing Covid-related situation took the tool, so I
                    decided to take a small break.
                  </p>

                  <p>
                    Shortly after I started working on{" "}
                    <a
                      rel="noreferrer"
                      className="underline"
                      target="_blank"
                      href="https://formtoro.com"
                    >
                      Formtoro
                    </a>
                    , a marketing platform for collecting data and measuring the
                    quality of eCommerce ads thanks to zero-party data.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2020</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    At the beginning of the year, I left Barclays Bank due to a
                    change in regulations that made working there less appealing
                    (thanks, IR35). I was planning on getting back to consulting
                    after my trip to Taiwan and Japan, but then Covid happened.
                  </p>

                  <p>
                    After a few months of building some side projects, I took on
                    a contract with <b>TradeWeb</b>, one of the most important
                    Electronic Trading services in the world.
                  </p>

                  <p>
                    Needless to say, the project got me out of my comfort zone,
                    having to deal with a difficult transition from a Flash/C++
                    based charting library to a new, Angular and Highcharts
                    stack.
                  </p>

                  <p>
                    This was one fo the hardest projects I have ever worked one,
                    but thankfully we were able to swap all the charts in the
                    system before the Flash kill-switch in January 2021.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2019</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    At the beginning of the year, I joined <b>OneTrust</b>, a
                    unicorn in the Privacy space, and likely one of the highest
                    growing startups in the world.
                  </p>

                  <p>
                    I was hired to grow and lead the London&apos;s front-end
                    engineering team, focused on Angular.
                  </p>

                  <p>
                    OneTrust was a pretty great company, but not the ideal one
                    for me personally. I decided to take on a more challenging
                    contract with <b>Barclays Bank</b>, where I was tasked to
                    co-lead a project that had to be delivered within 6-months.
                    Challenge accepted!
                  </p>

                  <p>
                    This project was absolutely fascinating: it involved
                    building a reusable, customizable framework for building
                    interactive forms driven by a custom syntax that could be
                    written by anyone, without any coding knowledge required.
                  </p>

                  <p>
                    The hardest part was dispatching actions that would affect
                    dozens, if not more, other forms on the same pricing page.
                    For each given action, the affected forms could be could,
                    changed in value, options, andf so on. And the cascade would
                    continue affecting other forms as a result!
                  </p>

                  <p>It wasn&apos;t easy, but we did it!</p>
                </p>
              </div>

              <div>
                <Heading>2017-2018</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    In 2017 I finally joined my first financial institution:{" "}
                    <b>Societe Generale</b>, one of the largest banks in Europe.
                  </p>

                  <p>
                    My goal was to modernize the stack from Angular.js to modern
                    Angular and ngRx, while maintaining a functional existing
                    application.
                  </p>

                  <p>
                    For the first time, I had a major responsibility on my
                    hands: financial applications, as you can imagine, can cause
                    financial losses!
                  </p>

                  <p>
                    The experience was both exciting and terrifying, but this
                    was one of the most valuable experiences in my career.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2015-2016</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    After I left eFinancialCareers, I went to work for Klood, a
                    social-media planner and analytics company, then turned
                    market-research analyzer.
                  </p>

                  <p>
                    It never caught on, but these were fundamental years in my
                    growth - at a time when London&apos;s tech-sector was
                    probably at its peak before the Brexit meltdown happened. A
                    wonderful time to be there.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2013-2014</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p>
                    After my graduation I went to work for King&apos;s College
                    London, in the Digital Humanities Department. Funded by the
                    EU, the project I worked on provided paleographers with
                    computer-based tools to enhance their studies.
                  </p>

                  <p>
                    It was my first experience being a professional developer,
                    in a cheerful, skilled and very friendly environment.
                  </p>

                  <p>
                    After the expiration of my contract, I went on to work in
                    the private sector. I landed at eFinancialCareers, one of
                    the most important Job boards in the financial sector.
                  </p>

                  <p>
                    Despite being in an office full of awesome poeple, the
                    experience didn&apos;t last long for me, as I was never
                    really welcome to the offshore company that took complete
                    ownership of the project. Pity.
                  </p>
                </p>
              </div>

              <div>
                <Heading>2010-2013</Heading>

                <p className="font-serif md:font-light flex-col space-y-6">
                  <p className="font-serif">
                    I studied Digital Humanties at University of Pisa, a subject
                    which taught me both Computer Science and literary studies
                    notions, such as writing, linguistics, and some much less
                    useful (but still super-interesting) subjects.
                  </p>
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
