import React from "react";
import Whiteline from "../../assets/images/vertical-whiteline.gif";

function About() {
  return (
    <section class="py-26 bg-orange-400 h-96">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-extrabold font-heading text-yellow-100">
            About
          </h1>
        </div>
        <div class="max-w-3xl mx-auto text-center">
          <p class="lg:text-xl md:text-lg text-sm md:px-4 px-2 font-bold leading-relaxed mb-12 text-gray-50">
            Cosmonaut는 코스모스 생태계에 컨트랙트를 만들고, 배포하고,
            <br />
            DApp으로 만드는 방법을 알려주는 무료 코딩 스쿨입니다!
          </p>
        </div>
        <img
          class="block w-40 mx-auto overflow-y-visible object-contain"
          src={Whiteline}
          alt=""
        />
      </div>
    </section>
  );
}

export default About;