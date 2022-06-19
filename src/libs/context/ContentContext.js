import { createContext } from "react";

export const ContentContext = createContext(null);

export const content = [
  {
    lessonInfo: [
      {
        number: "0",
        title: "Get Ready for Terraforming",
        desc: "테라포밍을 준비하세요.",
        subDesc: "개발 환경을 구축하고 몇 가지 테스트도 한 번 해봅시다.",
        goal: "개발환경 구축하기 || 예시 컨트랙트 컴파일 해보기",
        result:
          "Codes: 세팅된 개발환경, 예시 코드 (w/ 컴파일 결과물) || Asset: 우주인 + 뒷배경 행성 배경",
      },
      {
        number: "1",
        title: "Welcome to Spaceship Factory",
        desc: "우주선 공장에 오신 것을 환영합니다!",
        subDesc: "개척을 위한 우주선 ESFERA를 만들어봅시다.",
        goal: "NFT(CW721) 코드 분석 || Rust 문법 엿보기 || CW721 우주선 NFT 코드 || Instantiate",
        result:
          "Codes: NFT(CW721) 코드 || Asset: 우주선 공장 이미지 + NFT 우주선",
      },
      {
        number: "2",
        title: "Fuel Up and Load the Freight",
        desc: "우주선 ESFERA에 탑승하신 모든 승무원 여러분, 지금부터 연로를 주입하고 화물을 승선해주시길 바랍니다.",
        subDesc: "연료와 화물을 확보하고, 우주선에 공급합시다.",
        goal: "NFT(CW721) 코드 분석 || Rust 문법 엿보기 || CW721 우주선 NFT 코드 || Instantiate",
        result:
          "Codes: NFT(CW721) 코드 || Asset: 우주선 공장 이미지 + NFT 우주선",
      },
      {
        number: "3",
        title: "Prepare to Launch",
        desc: "ESFERA호 발사 준비. 5, 4, 3, …",
        subDesc:
          "우주선 발사에 앞서 문제가 없는지 테스트 해봅시다. 또한, 최적의 성능을 낼 수 있도록 최적화를 진행해 봅시다.",
        goal: "Unit Test || Rust 및 컨트랙트 최적화",
        result: "업그레이드(최적화)된 우주선",
      },
      {
        number: "4",
        title: "ESFERA Takeoff",
        desc: "소행성대에 진입합니다. 모든 승무원 여러분들은 갑작스러운 충돌에 대비하시길 바랍니다.",
        subDesc:
          "랜덤 숫자 생성기로부터 임의의 숫자를 받아, 소행성을 피하는 게임을 만들어 봅시다.",
        goal: "Random 숫자 생성기 || For 반복문 사용하기 || IF 조건문 사용하기",
        result: "소행성에 부딪혀 망가진 우주선, 또는 소행성을 잘 피한 우주선",
      },
      {
        number: "5",
        title: "Let's Play a Game!",
        desc: "챕터 4까지 만들었던 게임을 더 게임처럼 만들어봅시다!",
        subDesc: "컨트랙트에 프론트엔드 연결해봅시다.",
        goal: "프론트엔드 개발을 통해 게임 만들기",
        result: "CosmJS 사용하기 || 지갑 (케플러) 연결하기.",
      },
    ],
    lesson0: [
      { chapter: 1, title: "Install Go & Rust" },
      { chapter: 2, title: "Wasm / Wasmd" },
      { chapter: 3, title: "Tastnet (Cliffnet)" },
      { chapter: 4, title: "Interaction with Contract" },
    ],
    lesson1: [
      { chapter: 1, title: "CW721 Spec" },
      { chapter: 2, title: "CW721 Basic" },
      { chapter: 3, title: "Building CW721 Contract" },
      { chapter: 4, title: "CW2981 Royalties (Advanced)" },
    ],
  },
];
