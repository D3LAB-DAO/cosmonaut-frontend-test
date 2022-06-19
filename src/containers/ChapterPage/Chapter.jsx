import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Navbar from "../../components/common/Navbar";
import Navigator from "../../components/chapter/Navigator";
import tw from "tailwind-styled-components";
import Desc from "../../components/chapter/DescTypes/Desc";
import Bgv4 from "../../assets/images/bg-v4.svg";
import BackToOverview from "../../components/chapter/components/BackToOverview";
import ChapterHeader from "../../components/chapter/components/ChapterHeader";
import OrangeType from "../../components/chapter/DescTypes/OrangeType";
import GreenType from "../../components/chapter/DescTypes/GreenType";
import BlueType from "../../components/chapter/DescTypes/BlueType";

const Background = tw.section`pt-14 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function Chapter() {
  const { id, chID } = useParams();

  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          Cosmonaut | Lesson {id} Ch.{chID}
        </title>
      </Helmet>

      <Background
        style={{
          backgroundImage: `url(${Bgv4})`,
        }}
      >
        <BackToOverview />
        <ChapterHeader />

        <Desc />
        <OrangeType />
        <GreenType />
        <BlueType />
      </Background>
      <Navigator />
    </>
  );
}

export default Chapter;
