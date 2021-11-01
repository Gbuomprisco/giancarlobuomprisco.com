import Container from "../../components/container";
import MainHeader from "../../components/main-header";
import ArticlesList from "../../components/articles-list";
import Layout from "../../components/layout";

import { getArticlesByTag, getAllTags } from "../../lib/api";

import Article from "../../types/article";
import Hero from "../../components/hero";

type Props = {
  posts: Article[];
  tag: string;
};

const TagPage = ({ posts, tag }: Props) => {
  return (
    <Layout>
      <Container>
        <MainHeader />

        <div className="flex justify-center">
          <Hero>{tag}</Hero>
        </div>

        <div className="mt-8 md:mt-12">
          <ArticlesList posts={posts} />
        </div>
      </Container>
    </Layout>
  );
};

export default TagPage;

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const posts = getArticlesByTag(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTags().map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
