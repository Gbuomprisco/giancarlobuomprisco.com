import Link from "next/link";
import Head from "next/head";

import Container from "../components/container";
import MainHeader from "../components/main-header";
import Layout from "../components/layout";
import Tag from "../components/tag";

import { getAllTags } from "../lib/api";
import Hero from "../components/hero";
import { TITLE } from "../lib/constants";

type Props = {
  tags: string[];
};

const TagPage = ({ tags }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{TITLE} | Tags</title>
      </Head>

      <Container>
        <MainHeader />

        <div className="flex justify-center">
          <Hero>Tags</Hero>
        </div>

        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 mb-8">
            {tags.map((tag) => {
              const href = `/tags/${tag}`;

              return (
                <Link key={tag} href="/tags/[tag]" as={href} passHref>
                  <Tag>
                    <a href={href}>{tag}</a>
                  </Tag>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default TagPage;

export async function getStaticProps() {
  const tags = getAllTags();

  return {
    props: {
      tags,
    },
  };
}
