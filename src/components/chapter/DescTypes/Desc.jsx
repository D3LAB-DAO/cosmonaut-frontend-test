import React from "react";
import tw from "tailwind-styled-components";

const Section = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const SidePic = tw.div`flex w-full justify-between text-orange-400`;
const Picture = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;
const UnitDesc = tw.div`container flex flex-wrap justify-center mx-auto md:px-20 px-8 mb-10`;

function Desc() {
  return (
    <>
      <Section>
        <div class="flex flex-wrap justify-center">
          <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
            <div class="px-4 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
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
                  CW721은 코즘와즘에 기반을 둔 대체불가능토큰의 표준입니다. 그
                  이름과 디자인은 이더리움의 ERC721 표준을 준수하고 있으면서도,
                  이더리움과 다른 코스모스 블록체인의 특징에 맞는 일부 추가적인
                  확장을 포함하고 있습니다.
                  <br />
                  <br />
                  여기 정의되어 있는 타입들은 표준 CW721 컨트랙트를 구현하거나
                  호출하기 위해 참고될 수 있습니다. 즉 CW721 그 자체로는
                  껍데기에 불과하며, 이 표준 스펙을 참고해 다른 NFT 컨트랙트를
                  호출하거나, 본인의 서비스에 따라 구현을 채우면 됩니다.
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
          <Side>
            <div class="block mx-4">
              <h1 class="w-full text-2xl font-heading place-content-center mb-2">
                About Code
              </h1>
              <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
                CW721 Spec은 여러 구역으로 나뉘어 있습니다. 컨트랙트는 이 모든
                기능성을 구현할 필요는 없으나, Base로 분류되어 있는 구역은 모두
                구현해야 합니다.
              </h1>
              <ul class="list-disc xl:text-lg md:text-sm text-xs font-normal ml-4 mt-3">
                <li>Base</li>
                <li>Metadata</li>
                <li>Enumerable</li>
              </ul>
            </div>
          </Side>
        </div>
      </Section>
      <UnitDesc>
        <h1 class="lg:w-1/5 md:text-left text-center w-full text-yellow-200 lg:pl-8 font-heading place-content-center lg:text-3xl text-2xl mb-3">
          1. Base
        </h1>
        <div class="lg:w-3/5 w-full block ml-10">
          <span class="w-full font-normal lg:text-lg text-sm">
            Base에서는 고유한 ID(컨트랙트 안에서 고유한 임의의 문자열)와
            소유자를 가지는 토큰을 중심으로, 이와 관련된 소유권, 전송, 그리고
            허가와 관련된 요소를 다루고 있습니다.
            <br />
            <br />
            Base는 모든 CW721 컨트랙트가 준수해야하는 필수 스펙입니다.
          </span>
        </div>
      </UnitDesc>
    </>
  );
}

export default Desc;
