import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";

import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import { TITLE } from "../lib/constants";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
        </Head>

        <Container>
          <MainHeader />

          <Intro />

          <div>
            <p className="my-5">
              <p>Yes, this is still fairly empty.</p>
              <p>In the meantime, you can connect with me on Social Media:</p>
            </p>

            <ul className="flex-col space-y-1 list-decimal ml-5">
              <li>
                Follow me on{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://twitter.com/gc_psk"
                >
                  Twitter
                </a>
              </li>

              <li>
                Connect on{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://www.linkedin.com/in/giancarlobuomprisco/"
                >
                  Linkedin
                </a>
              </li>

              <li>
                Fork my code on{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://github.com/gbuomprisco"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
