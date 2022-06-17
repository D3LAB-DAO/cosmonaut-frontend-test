import React from "react";
import { Helmet } from "react-helmet";
import tw from "tailwind-styled-components";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Curriculum from "../../components/index/Curriculum";
import Overview from "../../components/index/Overview";

const Section = tw.section`relative lg:pb-20 bg-cover bg-center bg-opacity-10 lg:pt-32`;

function Index() {
  return (
    <>
      <Helmet>
        <title>Cosmwasm Tutorial Course</title>
      </Helmet>
      <Navbar />

      <Section
        style={{
          backgroundImage: `url(${require("../../assets/images/25-spacehole-2x.jpg")})`,
        }}
      >
        <div class="container lg:px-8 mx-auto relative mb-24">
          <div class="grid grid-cols-2 w-full mx-auto lg:gap-12 lg:-mx-4">
            <Overview />
            <Curriculum />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Index;
