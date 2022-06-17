import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import tw from "tailwind-styled-components";
import Translucent from "../../assets/images/spaceship-translucent.png";
import UserProgress from "../../components/profile/UserProgress";
import Header from "../../components/profile/Header";

const Background = tw.div`container mx-auto relative pt-12 bg-fixed bg-top bg-origin-content bg-no-repeat pb-20 mx:px-20 px-8`;

function MyPage() {
  return (
    <>
      <Navbar />
      <Background
        style={{
          backgroundImage: `url(${Translucent})`,
        }}
      >
        <Header />
        <UserProgress />
      </Background>
      <Footer />
    </>
  );
}

export default MyPage;
