import React, { useEffect } from "react";

function Special() {
  useEffect(() => {
    const firstCallback = function (entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpFirst");
        } else {
          entry.target.classList.remove("lg:animate-goUpFirst");
        }
      });
    };
    const firstObserver = new IntersectionObserver(firstCallback);
    const first = document.querySelectorAll("#first");
    first.forEach(function (target) {
      firstObserver.observe(target);
    });

    const secondCallback = function (entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpSecond");
        } else {
          entry.target.classList.remove("lg:animate-goUpSecond");
        }
      });
    };
    const secondObserver = new IntersectionObserver(secondCallback);
    const second = document.querySelectorAll("#second");
    second.forEach(function (target) {
      secondObserver.observe(target);
    });

    const thirdCallback = function (entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpThird");
        } else {
          entry.target.classList.remove("lg:animate-goUpThird");
        }
      });
    };
    const thirdObserver = new IntersectionObserver(thirdCallback);
    const third = document.querySelectorAll("#third");
    third.forEach(function (target) {
      thirdObserver.observe(target);
    });

    const fourthCallback = function (entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpFourth");
        } else {
          entry.target.classList.remove("lg:animate-goUpFourth");
        }
      });
    };
    const fourthObserver = new IntersectionObserver(fourthCallback);
    const fourth = document.querySelectorAll("#fourth");
    fourth.forEach(function (target) {
      fourthObserver.observe(target);
    });
  }, []);

  return (
    <section class="py-26 bg-orange-200 pb-32">
      <div class="container lg:px-4 px-12 mx-auto">
        <div class="max-w-3xl mx-auto text-center mb-16 pb-10">
          <h1 class="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            What is so special?
          </h1>
          <p class="leading-7 text-sm md:text-lg text-green-500 font-semibold">
            Cosmonaut는 코스모스 생태계에 컨트랙트를 만들고, 배포하고, DApp으로
            만드는 방법을 알려주는 무료 코딩 스쿨입니다! 코즘와즘의 안전한
            멀티-체인 컨트랙트를 학습해보세요. Cosmonaut는 코스모스, 코즘와즘,
            그리고 Rust에 익숙하지 않은 분들도 쉽게 따라올 수 있게
            만들어졌습니다. 걱정말고 우리를 따라오세요! 이쁘고 친절한 설명과
            함께 코스모스의 세계로 다이브 해봅시다.
          </p>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-8">
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div
              id="first"
              class=" flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-orange-400 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-extrabold mb-3 text-3xl">Bottom-UP</h3>
                <h4 class="font-extrabold text-md">
                  “개척자” 스토리에 녹아든, bottom-up 구성의 단계별 강좌
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:translate-y-8">
            <div
              id="second"
              class="flex items-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center justify-center bg-yellow-600 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-extrabold mb-3 text-3xl">2 Division</h3>
                <h4 class="font-extrabold text-md">
                  학습과 실습을 동시에 진행할 수 있는 2분할 화면 구성
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:translate-y-16">
            <div
              id="third"
              class="flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-green-500 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-extrabold mb-3 text-3xl">Game</h3>
                <h4 class="font-extrabold text-md">
                  실제 구동되는 게임 만들어보기: Rust 코딩, 컨트랙트 작성 및
                  배포, 프론트엔드 연결까지
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:-translate-y-8">
            <div
              id="fourth"
              class="flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-blue-500 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-extrabold mb-3 text-3xl">Level</h3>
                <h4 class="font-extrabold text-md">
                  유닛 테스트와 최적화 등 프로덕트 레벨에서의 경험
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
