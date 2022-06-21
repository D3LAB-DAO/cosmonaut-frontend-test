import React from "react";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Background = tw.div`
pb-16
bg-cover
bg-fixed`;

const Backbackground = tw.div`
bg-scroll
bg-contain
bg-center 
bg-no-repeat 
bg-opacity-50 
container 
px-4 
mx-auto 
relative 
pt-20 
pb-16 
mt-2
`;

function Intro() {
  return (
    <section class="relative">
      <Background
        style={{
          backgroundImage: `url(${require("../../assets/images/space4Artboard-22.png")})`,
        }}
      >
        <Backbackground
          style={{
            backgroundImage: `url(${require("../../assets/images/spacetrip.gif")})`,
          }}
        >
          <div class="mx-auto text-center mt-24 mb-20">
            <span class="text-xl md:text-2xl font-extrabold text-orange-500">
              Become a pioneer of Cosmos!
            </span>
            <h1 class="font-heading mt-4 mb-6 text-4xl md:text-6xl">
              COSMONAUT
            </h1>
            <p class="lg:text-lg md:text-md text-sm mb-10 leading-relaxed mx-4 md:mx-12 lg:mx-32">
              Cosmonaut is a coding school where you can experience creating
              Cosmwasm contracts and DApps while making NFT games yourself.
              <br /> Learners can expect to achieve the following:
            </p>

            <div class="flex flex-wrap mb-10 justify-center">
              <Link to="/lesson/0">
                <button class="animate-bounce will-change-transform inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-center text-lg border-3 shadow transition duration-200 rounded-full py-4 px-12 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:to-blue-500 hover:text-white">
                  START LESSON
                </button>
              </Link>
            </div>
          </div>
        </Backbackground>
        <div class="flex flex-wrap justify-center ">
          <div class=" max-w-xs md:w-1/3 lg:px-4 px-2 mb-6">
            <div class="h-full md:py-6 py-2 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 rounded-2xl text-center">
              <img class="block md:h-20 h-10 mx-auto mb-4" src={Icon1} alt="" />
              <h4 class="lg:text-2xl text-md  text-white font-heading mb-4">
                Contract
              </h4>
              <p class="px-4 lg:text-lg text-sm text-white font-bold leading-7">
                Learn how to create a Cosmwasm contract. Meet CW20 and CW721.
              </p>
            </div>
          </div>
          <div class=" max-w-xs  md:w-1/3  lg:px-4 px-2 mb-6">
            <div class="h-full md:py-6 py-2 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100  rounded-2xl text-center">
              <img class="block md:h-20 h-10 mx-auto mb-4" src={Icon2} alt="" />
              <h4 class="lg:text-2xl text-md text-white font-heading mb-4">
                Rust Language
              </h4>
              <p class="px-4 lg:text-lg text-sm text-white font-bold leading-7">
                Get familiar with Rust. Let's do some unit testing and
                optimization, too.
              </p>
            </div>
          </div>
          <div class=" max-w-xs  md:w-1/3 lg:px-4 px-2 mb-6">
            <div class="h-full md:py-6 py-2 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100  rounded-2xl text-center">
              <img class="block md:h-20 h-10 mx-auto mb-4" src={Icon3} alt="" />
              <h4 class="lg:text-2xl text-md text-white font-heading mb-4">
                DApp
              </h4>
              <p class="px-4 lg:text-lg text-sm text-white font-bold leading-7">
                Create a DApp by connecting frontend to your contracts through
                CosmJS.
              </p>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
}

export default Intro;
