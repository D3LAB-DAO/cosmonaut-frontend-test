import React from "react";
import tw from "tailwind-styled-components";
import GoalSVG from "../../assets/images/goal.svg";
import ResultSVG from "../../assets/images/result.svg";

const Title = tw.h1`
text-xs 
md:text-lg 
font-semibold 
text-center 
text-yellow-500 
mb-1`;
const SubTitle = tw.div`
mt-3
mb-4`;
const Progress = tw.div`mb-2 xl:w-84 lg:w-80 md:w-80 w-60 mx-auto`;
const Desc = tw.div`block grid place-content-center h-40 md:my-6 my-4 md:mx-4 py-2 text-center border-dashed border-2 border-indigo-900 rounded-xl mx-4`;
const SubDesc = tw.div`flex items-start md:my-6 md:mx-8 mx-4 text-gray-500 my-4`;
const Container = tw.div`bg-yellow-100 md:grid md:grid-cols-3 xl:gap-4 gap-2 md:mt-3 mt-2 md:items-start items-center xl:px-6 rounded-xl px-3 py-3 py-4 mx-4`;

function Overview() {
  return (
    <>
      <div class="w-full lg:col-span-1 col-span-2 lg:mx-0 mx-auto lg:order-1 order-2">
        <div class="lg:border-b-0 lg:border-t-0 bg-green-500 rounded-3xl mx-6 lg:mx-0 md:px-2 px-1 md:py-2 py-1">
          <div class="block object-cover mx-auto">
            <div class="px-4 bg-gray-50 rounded-2xl lg:pt-4 pt-6 border-indigo-900 border-4 md:pb-10 pb-6">
              <Title>Lesson Overview</Title>
              <SubTitle>
                <h2 class="text-center text-lg font-heading text-indigo-900">
                  Lesson 1.
                </h2>
                <h3 class="text-2xl text-center font-heading text-indigo-900">
                  Welcome to Spaceship Factory
                </h3>
              </SubTitle>
              <Progress>
                <div class="w-full rounded-full bg-gray-200 mb-1">
                  <div
                    class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
                    style={{ width: "42%" }}
                  >
                    <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
                  </div>
                </div>
                <div class="grid grid-cols-6 md:gap-8 gap-4 justify-between my-2">
                  <span class="flex md:text-sm text-xs justify-start font-mono text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="md:h-5 md:w-5 h-4 w-4"
                      fill="none"
                      viewbox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                  </span>
                  <span class="md:text-sm text-xs font-mono text-gray-700">
                    Chp.1
                  </span>
                  <span class="md:text-sm text-xs font-mono text-gray-700">
                    Chp.2
                  </span>
                  <span class="md:text-sm text-xs font-mono text-gray-700">
                    Chp.3
                  </span>
                  <span class="md:text-sm text-xs font-mono text-gray-700">
                    Chp.4
                  </span>
                  <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="md:h-5 md:w-5 h-4 w-4"
                      fill="none"
                      viewbox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Progress>
              <Desc>
                <h2 class="md:text-lg text-sm font-mono text-gray-500">
                  Welcome to the spaceship factory!
                </h2>
              </Desc>
              <SubDesc>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 flex-shrink-0 mr-2"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="md:text-lg text-left font-normal text-xs">
                  Let's build a spacecraft called ESFERA to explore.
                </span>
              </SubDesc>
              <Container>
                <div class="md:col-span-1 flex md:justify-start">
                  <div class="flex-shrink-0 flex items-center justify-center w-9 h-9">
                    <img class="block" src={GoalSVG} alt="" />
                  </div>
                  <h4 class="xl:text-lg text-base font-heading text-indigo-900 self-center lg:ml-4 ml-2">
                    goal
                  </h4>
                </div>
                <p class="col-span-2 xl:text-base md:text-sm text-xs font-normal text-indigo-900 md:mt-0 mt-3">
                  Set the development environment. Experience deployment and
                  testing.
                </p>
              </Container>

              <Container>
                <div class="md:col-span-1 flex md:justify-start">
                  <div class="flex-shrink-0 flex items-center md:justify-center w-9 h-9">
                    <img class="block" src={ResultSVG} alt="" />
                  </div>
                  <h4 class="xl:text-lg text-base font-heading text-indigo-900 md:mb-0 md:mt-0 self-center lg:ml-4 ml-2">
                    result
                  </h4>
                </div>
                <p class="col-span-2 lg:text-base text-sm font-normal text-indigo-900 md:mt-0 self-center mt-4">
                  Now you’re ready for the terraforming.
                </p>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
