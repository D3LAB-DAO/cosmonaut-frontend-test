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

function L0C4U1() {
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
              - 1. Compiling Example Contract
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
                    rustup - stable 툴체인
                  </h1>
                </div>
              </div>
            </ContentHeader>
            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                예제 컨트랙트를 컴파일하고 wasm binary excutable을 만들어봅시다.
                다음은 많은 컨트랙트 예제들이 있는{" "}
                <a href="https://github.com/InterWasm/cw-contracts">
                  'cw-contracts'
                </a>
                를 참고했습니다. 이 중에서 유명한 예제인 nameservice를 한번
                컴파일 해봅시다.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                우선 코드를 깃허브로부터 가져옵니다.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                rustup을 이용하면 좀 더 명시적으로 툴체인을 지정해 컴파일할 수
                있습니다. 툴체인은 여러 리스트와 컴포넌트들을 포함하고 있으며,
                이를 지정해서 컴파일하는 것으로 특정 프로젝트에서는 특정
                채널(stable, nightly, beta)과 설정으로 러스트를 컴파일할 수
                있습니다.
              </p>
              <a href="https://rust-lang.github.io/rustup/concepts/toolchains.html">
                <p class="font-normal lg:text-base text-sm mb-4">
                  https://rust-lang.github.io/rustup/concepts/toolchains.html
                </p>
              </a>
              <p class="font-normal lg:text-base text-sm mb-4">
                여기서는 stable 툴체인을 사용하겠습니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                만일 불필요한 코드를 배제하고 컴파일하고 싶으면 다음을 수행할 수
                있습니다. 더 자세한 것은 추후 최적화를 소개할 때
                말씀드리겠습니다.
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

export default L0C4U1;
