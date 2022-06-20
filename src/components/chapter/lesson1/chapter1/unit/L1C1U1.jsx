import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../../../common/Navbar";
import BackToOverview from "../../../components/BackToOverview";
import Navigator from "../../../Navigator";
import Bgv4 from "../../../../../assets/images/bg-v4.svg";
import Footer from "../../../../common/Footer";
import { L1C1U1Context } from "../../../../../libs/context/L1C1U1Context";
import Check from "../../../../common/Check";

const Background = tw.section`pt-14 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;
const ChapterHeader = tw.div`items-center lg:mx-4 mx-8  ml-2 mb-4`;

const Section = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const SidePic = tw.div`flex w-full justify-between text-orange-400`;
const Picture = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;
const UnitDesc = tw.div`container flex flex-wrap justify-center mx-auto md:px-20 px-8 mb-10`;

const OrangeHeader = tw.div`bg-orange-400 py-2 lg:py-6 md:py-3`;
const GreenHeader = tw.div`bg-green-500 py-2 lg:py-6 md:py-3`;
const BlueHeader = tw.div`bg-blue-500 py-2 lg:py-6 md:py-3`;

const ContentTitle = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const Content = tw.section`bg-black`;
const ContentHeader = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;

const Desc = tw.div`lg:w-1/2 w-full md:w-2/3`;

function L1C1U1() {
  const data = useContext(L1C1U1Context);
  const [msg, setMsg] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    setMsg(data[0].msgData);
    setQuery(data[0].queriesData);
  }, [data]);

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
            <h3 class="text-xl  md:text-left text-center md:text-2xl font-heading text-orange-400">
              CW721 Spec
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
                    CW721은 코즘와즘에 기반을 둔 대체불가능토큰의 표준입니다. 그
                    이름과 디자인은 이더리움의 ERC721 표준을 준수하고
                    있으면서도, 이더리움과 다른 코스모스 블록체인의 특징에 맞는
                    일부 추가적인 확장을 포함하고 있습니다.
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
                  기능성을 구현할 필요는 없으나, Base로 분류되어 있는 구역은
                  모두 구현해야 합니다.
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
      </Background>
      <OrangeHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-1. Messages (msg.rs)
            </h1>
          </div>
        </div>
      </OrangeHeader>
      {msg?.map(e => (
        <Content>
          <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
            <ContentId>
              <span class="text-center font-heading text-2xl text-black">
                {e.id}
              </span>
            </ContentId>
            <div class="lg:w-1/2 w-full md:w-2/3">
              <ContentTitle>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </ContentTitle>

              <ContentDesc>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc1}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc2}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc3}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc4}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc5}
                </span>
              </ContentDesc>
            </div>
          </div>
        </Content>
      ))}
      <GreenHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-2. Queries(query.rs)
            </h1>
          </div>
        </div>
      </GreenHeader>
      {query?.map(e => (
        <Content>
          <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
            <ContentId>
              <span class="text-center font-heading text-2xl text-black">
                {e.id}
              </span>
            </ContentId>
            <div class="lg:w-1/2 w-full md:w-2/3">
              <ContentTitle>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </ContentTitle>

              <ContentDesc>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc1}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc2}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc3}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc4}
                </span>
                <span class="font-normal lg:text-base text-sm mb-4">
                  {e.desc5}
                </span>
              </ContentDesc>
            </div>
          </div>
        </Content>
      ))}
      <BlueHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-2. Queries(query.rs)
            </h1>
          </div>
        </div>
      </BlueHeader>
      <Content>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <Check />
          <Desc>
            <ContentHeader>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    ReceiverNFT
                  </h1>
                </div>
              </div>
            </ContentHeader>
            <ContentDesc>
              <p class="font-normal lg:text-base text-sm mb-8">
                SendNft의 반대부에는 ReceiveNft가 있습니다. ReceiveNft는 CW721
                토큰을 다루고 싶은 모든 컨트랙트가 반드시 구현해야하는
                스펙입니다. (일반적으로 CW721 컨트랙트 자체가 구현하는 항목은
                아닙니다.)
              </p>
              <p class="font-normal lg:text-base text-sm mb-8">
                SendNft 메시지를 보내는 CW721 구현체 컨트랙트 주소는
                env.sender에서 다뤄지므로 위변조할 수 없습니다. ReceiveNft를
                다루는 컨트랙트에서는 이 발송인 주소가 토큰 컨트랙트 주소와
                일치하는지 확인하고 보장한 후 처리해야 합니다. 임의의 주소를
                모두 허용해서는 안 됩니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-8">
                sender는 토큰을 전송하고자 하는 원 주소입니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-8">
                token_id는 토큰의 고유한 ID입니다.
              </p>
              <p class="font-normal lg:text-base text-sm mb-8">
                msg는 컨트랙트-맞춤 메시지 혹은 임의 데이터로 디코딩 될 수 있는
                바이너리입니다. 만일 기본 액션만 수행하고자 한다면 msg는
                비어있을 수 있습니다.
              </p>
            </ContentDesc>
          </Desc>
        </div>
      </Content>

      <Navigator title="Welcome to spaceship factory" />
      <Footer />
    </>
  );
}

export default L1C1U1;
