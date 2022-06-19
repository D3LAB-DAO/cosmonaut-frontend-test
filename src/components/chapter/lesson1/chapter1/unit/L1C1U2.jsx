import React from "react";
import tw from "tailwind-styled-components";
import Check from "../../../../common/Check";
import Navbar from "../../../../common/Navbar";
import BackToOverview from "../../../components/BackToOverview";
import Navigator from "../../../Navigator";
import Bgv4 from "../../../../../assets/images/bg-v4.svg";
import Footer from "../../../../common/Footer";

const Contents = tw.div`mx-auto flex flex-wrap justify-center px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6`;
const Desc = tw.div`lg:w-1/2 w-full md:w-2/3`;
const ContentHeader = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const Background = tw.section`pt-14 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;
const ChapterHeader = tw.div`items-center lg:mx-4 mx-8  ml-2 mb-4`;

function L1C1U2() {
  return (
    <>
      <Navbar />
      <Background
        style={{
          backgroundImage: `url(${Bgv4})`,
        }}
      >
        <BackToOverview />
        <ChapterHeader>
          <div class="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
            <h2 class="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
              Chapter 1
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              - 1. Go
            </h3>
          </div>
        </ChapterHeader>
        <Contents>
          <Check />
          <Desc>
            <ContentHeader>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    Go Installer
                  </h1>
                </div>
              </div>
            </ContentHeader>

            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                Go 인스톨러를 통해 쉽게 설치하실 수 있으며, 혹은 아래 설치
                명령어를 통해 설치하실 수 있습니다.
              </p>
              <a href="https://go.dev/doc/install">
                <p class="font-normal lg:text-base text-sm mb-4">
                  https://go.dev/doc/install
                </p>
              </a>
              <p class="font-normal lg:text-base text-sm mb-4">
                현재 시점을 기준으로, Go v1.17+ 이상 버전을 설치하시길
                추천드립니다.
              </p>
            </ContentDesc>
          </Desc>
        </Contents>
      </Background>
      <Navigator title="Welcome to spaceship factory" />
      <Footer />
    </>
  );
}

export default L1C1U2;
