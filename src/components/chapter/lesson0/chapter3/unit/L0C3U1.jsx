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

const Section = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const SidePic = tw.div`flex w-full justify-between text-orange-400`;

const Picture = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;

function L0C3U1() {
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
              Chapter 3
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              Testnet (Cliffnet)
            </h3>
          </div>
        </ChapterHeader>
        <Section>
          <div class="flex flex-wrap justify-center">
            <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
              <div class="px-2 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
                <SidePic>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </SidePic>
                <Picture>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="md:h-12 md:w-12 h-8 w-8"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </Picture>
                <Explanation>
                  <h1 class="w-full lg:text-lg text-sm text-white font-normal place-content-center">
                    컨트랙트를 구동하기 위한 환경도 필요하겠죠. 작성한
                    컨트랙트를 배포하고 테스트하고자 로컬 네트워크를 형성해도
                    되지만, 이미 존재하는 네트워크를 사용할 수도 있습니다.
                    <br />
                    <br />
                    현재 Cliffnet 테스트넷이 구동되고 있습니다. 잘 동작하고
                    있는지 다음 URL로부터 알아볼 수 있습니다.
                    <br />
                    <br />
                    <a href="https://rpc.cliffnet.cosmwasm.com/status">
                      https://rpc.cliffnet.cosmwasm.com/status
                    </a>
                    <br />
                    혹은 다음 블록 익스플로러로부터 상세 정보를 확인할 수도
                    있습니다.
                    <br />
                    <br />
                    <a href="https://block-explorer.cliffnet.cosmwasm.com/">
                      https://block-explorer.cliffnet.cosmwasm.com/
                    </a>
                    <br />이 네트워크와 소통하기 위해 wasmd를 사용할 수도 있고,
                    Node REPL을 사용할 수도 있습니다.
                  </h1>
                </Explanation>
                <SidePic>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </SidePic>
              </div>
            </div>
          </div>
        </Section>
        <Contents>
          <Check />
          <Desc>
            <ContentHeader>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    Setup-Go CLI
                  </h1>
                </div>
              </div>
            </ContentHeader>

            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-4">
                성공적으로 테스트를 위한 지갑 등록이 진행되었다면, wasmd에서 그
                정보를 출력해 줄 것입니다. 비록 테스트넷이지만, 비밀번호 분실을
                대비하여 mnemonic들을 안전한 곳에 별도 보관하세요. 귀찮음을
                피하려면.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                블록체인상에서의 활동은 모두 수수료가 들기 때문에, 상호작용을
                위해 약간의 토큰이 필요할 것입니다. 여기 테스트넷에는 두 개의
                네이티브 토큰이 존재합니다.
              </p>

              <ul class="list-disc xl:text-lg md:text-sm text-xs font-normal ml-4 mt-3 mb-4">
                <li>ROCK (urock) : 검증인이 되기 위해 사용됨</li>
                <li>PEBBLE (upebble) : 수수료를 지불하기 위해 사용됨</li>
              </ul>

              <p class="font-normal lg:text-base text-sm mb-4">
                수수료를 원하니 우리는 upebble을 요청하면 되겠죠. denom에
                upebble이라 적혀있음을 주목하면서 다음 명령을 수행합니다.
              </p>

              <p class="font-normal lg:text-base text-sm mb-4">
                이 명령은 faucet으로부터 약간의 토큰을 요청합니다.
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

export default L0C3U1;
