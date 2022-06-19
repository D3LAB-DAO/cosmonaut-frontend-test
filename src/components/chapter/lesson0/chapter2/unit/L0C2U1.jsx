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

function L0C2U1() {
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
              Chapter 2
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              - wasm / wasmd
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
                    Install wasmd
                  </h1>
                </div>
              </div>
            </ContentHeader>

            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                와즘 스마트 컨트랙트 구동이 가능한 코스모스존 구현체인 wasmd는
                코즘와즘 플랫폼의 핵심입니다. 이는 cosmos/gaia를 기반으로
                x/wasm을 추가한 것인데요. 그렇기 때문에 wasmd 바이너리는
                gaiad처럼 동작하고 거기에다가 x/wasm 모듈의 기능성이 더해진
                것입니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                만일 컨트랙트를 개발한다면 당연히 wasmd가 필요하겠죠.
              </p>
              <a href="https://docs.cosmwasm.com/docs/0.14/getting-started/installation/">
                <p class="font-normal lg:text-base text-sm mb-4">
                  https://docs.cosmwasm.com/docs/0.14/getting-started/installation/
                </p>
              </a>
              <p class="font-normal lg:text-base text-sm mb-4">
                wasmd 설치를 위해서는 go가 우선 설치되어 있어야 하며, PATH
                설정도 잘 되어 있어야 합니다.
              </p>
            </ContentDesc>
          </Desc>
        </Contents>
      </Background>
      <Navigator title="Get Ready for Terraforming" />
      <Footer />
    </>
  );
}

export default L0C2U1;
