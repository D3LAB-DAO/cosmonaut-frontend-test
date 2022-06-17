import React from "react";
import tw from "tailwind-styled-components";
import SignInAccount from "../../assets/images/signed-in-account3.svg";

const Section = tw.div`text-left mb-16 md:px-10 px-4`;

function Header() {
  return (
    <Section>
      <div class="mb-2">
        <img
          class="block rounded-full border-3 border-orange-400 shadow object-cover h-20 w-20"
          src={SignInAccount}
          alt=""
        />
      </div>
      <span class="text-lg font-extrabold text-orange-400 pl-2">@d3lab</span>
      <h1 class="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-2">
        My Journey
      </h1>
      <p class="font-extrabold md:text-xl text-sm">
        See how much lessons are completed to become a pioneer of Cosmos!
      </p>
    </Section>
  );
}

export default Header;
