import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import GroupContextProvider from "../context/GroupContext";
import Groups from "../components/Groups";

const heroContent = {
  imgUrl: "/assets/hero-img.jpg",
  header: "Discover Aisle",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <GroupContextProvider>
        <main className=" flex justify-center">
          <Container>
            <Hero data={heroContent} />
            <Groups />
          </Container>
        </main>
      </GroupContextProvider>
      <Footer />
    </div>
  );
};

export default Index;
