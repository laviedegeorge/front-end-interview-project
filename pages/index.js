import Head from "next/head";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <main></main>
    </div>
  );
};

export default Index;
