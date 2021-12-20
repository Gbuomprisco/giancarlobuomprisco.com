import Head from "next/head";

import Note from "../types/note";
import { TITLE } from "../lib/constants";
import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { getAllNotes } from "../lib/api";
import PostsList from "../components/posts-list";

type Props = {
  notes: Note[];
};

const Notes = ({ notes }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} - Notes</title>

          <meta
            key="meta:description"
            name="description"
            content={
              "Short-form posts, notes and tips about Angular, React, Next, Firebase, NestJS, StencilJS"
            }
          />
        </Head>

        <Container>
          <MainHeader />

          <Hero>Notes</Hero>

          <SubHeading>Short-form posts, notes and tips</SubHeading>

          {notes.length ? (
            <>
              <div className="space-y-12 mt-8 md:mt-16">
                <div className="w-full">
                  <div className="mx-auto flex flex-col space-y-8">
                    <PostsList posts={notes} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <span>No note found</span>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Notes;

export const getStaticProps = async () => {
  const notes = getAllNotes();

  return {
    props: {
      notes,
    },
  };
};
