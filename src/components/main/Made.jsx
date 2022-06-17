import React from "react";
import tw from "tailwind-styled-components";
import Account3 from "../../assets/images/signed-in-account3.svg";
import Bg7 from "../../assets/images/d3lab-bg7.svg";

const Section = tw.div`
md:py-26 
py-12 
bg-scroll 
bg-center 
bg-cover`;

const Circular = tw.div`
w-full
px-4
bg-center
bg-contain
bg-no-repeat
`;

function Made() {
  return (
    <Section style={{ backgroundImage: `url(${Bg7})` }}>
      <div class="container px-4 mx-auto">
        <h1 class="text-3xl md:text-4xl text-center font-extrabold font-heading ">
          Who made Cosmonaut?
        </h1>
        <div class="flex flex-wrap -mx-4 items-center">
          <Circular
            style={{
              backgroundImage: `url(${require("../../assets/images/circular3.gif")})`,
            }}
          >
            <img
              class="block mx-auto mt-4 md:mt-10 md:mb-10 mb-4 object-cover border-3 border-indigo-900 shadow-lg rounded-full md:h-64 h-40"
              src={Account3}
              alt=""
            />
          </Circular>
          <div class="w-full md:px-4 px-10  mb-0">
            <div class="mb-8 max-w-2xl mx-auto mt-4 ">
              <div class="flex mb-4 items-center">
                <span class="md:text-base text-xs font-medium">
                  D3LAB은 탈중앙화 철학을 준수하며 탈중앙화된 things를
                  만드는 탈중앙화자율조직입니다. 많은 블록체인 프로젝트들이
                  중앙화 요소를 가지고 있음을 지적하며, 소위 ‘어쩔 수 없이’
                  중앙화했던 부분들을 기술로 해결하고 있습니다.
                </span>
              </div>
              <div class="flex mb-4 items-center">
                <span class="md:text-base text-xs font-medium">
                  우리는 다가올 멀티체인 미래에서 코스모스가 중요한 역할을
                  수행할 것으로 믿고 있습니다. 또한, 코스모스 생태계에서
                  컨트랙트 구동을 가능케 하는 코즘와즘도 못지 않게 중요합니다.
                  코어와 컨트랙트 양 측에서 핵심 언어로 활약하고 있는 Rust도
                  배워야 합니다. 그러나 이들을 학습하기 위한 교육 자료가 턱없이
                  부족하고, 통합된 하나의 흐름으로 배울 수 있는 공간이 없어,
                  낙담하는 학습자들이 많은 상황입니다. 이에 D3LAB에서는 우리
                  “우주인"들을 “개척자"로 교육하고자 Cosmonaut를 만들었습니다.
                </span>
              </div>
              <div class="flex items-center">
                <span class="md:text-base text-xs font-medium">
                  이외에도 우리는 탈중앙화를 강화하기 위한 여러 프로젝트를 진행
                  중에 있습니다. 자세한 내용은 다음 우리의 홈페이지를
                  참고해주시길 바랍니다. 문의사항은 이메일로 문의 바랍니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Made;
