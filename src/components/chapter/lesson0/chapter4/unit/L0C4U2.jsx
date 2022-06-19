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

function L0C4U2() {
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
              Chapter 4
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              - 2. Instantiate
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
                    wasm binary executable
                  </h1>
                </div>
              </div>
            </ContentHeader>
            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                만들어낸 wasm binary executable은 블록체인에 업로드할 수
                있습니다.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                바이트코드는 CODE_ID를 통해 다운로드할 수 있고, 이를 보유하고
                있는 바이트코드와 diff를 통해 비교해 검증할 수 있습니다.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                이제 wasm 컨트랙트를 인스턴스화 할 수 있습니다.
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

export default L0C4U2;
