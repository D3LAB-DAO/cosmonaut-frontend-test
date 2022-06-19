import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import L0C1Nft from "../../../../../assets/images/cosmonaut-finished.svg";

const Section = tw.section`fixed h-full bottom-0 w-full z-50 pt-28 bg-gray-900 bg-opacity-75`;
const Background = tw.div`container bg-scroll bg-contain bg-center bg-no-repeat bg-opacity-50 flex my-auto px-4 mx-auto justify-center`;

function L0C3Finish() {
  return (
    <>
      <Section>
        <Background
          style={{
            backgroundImage: `url(${require("../../../../../assets/images/spacetrip.gif")})`,
          }}
        >
          <div class="container mb-12 mx-auto justify-center items-center">
            <h4 class="text-2xl font-heading mb-4 text-center">Great Job!</h4>
            <img
              class="block lg:h-96 mb-4 mx-auto md:h-64 h-52"
              src={L0C1Nft}
              alt=""
            />
            <Link to="/lesson/0/chapter/4">
              <button class="animate-bounce block mt-8 mx-auto md:mb-4 text-center text-lg border-3  transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white">
                Jump to Next One!
              </button>
            </Link>
          </div>
        </Background>
      </Section>
    </>
  );
}

export default L0C3Finish;
