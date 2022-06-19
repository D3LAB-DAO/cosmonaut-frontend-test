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

function L0C1U2() {
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
              - 2. Rust / Rustup
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
                    Rust Installer
                  </h1>
                </div>
              </div>
            </ContentHeader>

            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                rustup은 Rust를 설치하는 가장 쉬운 방법 중 하나입니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                https://rustup.rs
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                이외에 패키지매니저 또는 스탠드얼론 인스톨러를 이용하거나
                소스코드로부터 바로 빌드할 수도 있지만, 특별한 경우가 아니라면
                rustup을 사용하는 편이 훨씬 쉽고 빠릅니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                https://forge.rust-lang.org/infra/other-installation-methods.html
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                설치가 잘 되었는지 확인하기 위해, 간단한 “Hello, world!” 예제를
                만들어 볼 것입니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                파이썬 파일이 py 확장자로 끝나는 것처럼, 러스트 파일은 rs
                확장자로 끝납니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                main.rs 파일에 다음과 같이 작성하세요.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                끝입니다! 이제 파일을 저장하고, 다음 명령을 수행하세요.
              </p>
              <p class="font-normal lg:text-base text-sm mb-4">
                이 명령은 우리의 main.rs 파일을 컴파일하고 실행합니다. 터미널에
                출력된 “Hello, world!”를 좀 보세요!
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

export default L0C1U2;
