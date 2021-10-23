import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>

        <Container>
          <MainHeader />
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
