import Head from "next/head";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import Hero from "../../components/hero";
import MainHeader from "../../components/main-header";
import Layout from "../../components/layout";
import Container from "../../components/container";
import MDXRenderer from "../../components/mdx-renderer";

import ConvertkitPostSignup from "../../components/convertkit-post-signup";
import CollectionBrandingBar from "../../components/collection-branding-bar";
import CollectionName from "../../components/collection-name";

import { getHubBySlug, getAllHubs, queryAll } from "../../lib/api";
import Hub from "../../types/hub";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  hub: Hub;
  content: MDXRemoteSerializeResult;
};

type Params = {
  params: {
    hub: string;
  };
};

const HubPage = ({ hub, content }: Props) => {
  const collection = hub.collection;

  const style: Record<string, string> = {
    "--accent": collection.primaryColor,
    "--accent-light": collection.primaryColorLight,
  };

  return (
    <Layout>
      <CollectionBrandingBar collection={hub.collection} />

      <Container>
        <MainHeader />

        <div className="mb-16" style={style}>
          <Head>
            <title>{hub.name}</title>

            <meta property="twitter:title" content={hub.name} />
          </Head>

          <Hero>{hub.name}</Hero>

          <div className="flex justify-center mb-16">
            <CollectionName collection={hub.collection} />
          </div>

          <div>
            <MDXRenderer content={content} />
          </div>

          <div className="w-full md:w-8/12 mx-auto">
            <ConvertkitPostSignup />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default HubPage;

export async function getStaticProps({ params }: Params) {
  const { hub: slug } = params;

  const hub = getHubBySlug(slug) as Hub;
  const data = queryAll(hub.collection.name, hub.tags);
  const content = await markdownToHtml(hub.content, data);

  return {
    props: {
      hub,
      content,
    },
  };
}

export async function getStaticPaths() {
  const hubs = getAllHubs();

  const paths = hubs.map(({ slug }) => {
    return {
      params: {
        hub: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
