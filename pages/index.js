import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <main className="w-screen flex justify-center">
        <div className="w-full lg:w-8/12">
          <Hero
            imgUrl="../assets/hero-img.jpg"
            header="Discover Aisle"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
