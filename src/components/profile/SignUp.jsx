import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Logo from "../../assets/images/logo-v4.svg";
import Github from "../../assets/images/github-logo-black.svg";
import Google from "../../assets/images/google.svg";
import tw from "tailwind-styled-components";

const Signup = tw.a`flex items-center justify-center md:mx-4 mb-6 py-3 px-6 leading-6 text-lg font-bold md:font-extrabold bg-green-500 hover:bg-yellow-500 hover:text-black border-3 border-indigo-900 shadow rounded-lg transition duration-200`;

function SignUp() {
  return (
    <>
      <Navbar />
      <section class="py-24 bg-space-3 relative pt-32">
        <div class="container px-4 mx-auto relative">
          <div class="py-24 px-6 border-indigo-900 shadow bg-gray-500 rounded-2xl max-w-2xl mx-auto md:px-16 lg:pb-32">
            <div class="text-center mb-8">
              <a class="inline-block mx-auto mb-4" href="/">
                <img class="h-20" src={Logo} alt="" />
              </a>
              <p class="text-xl font-heading leading-7 text-yellow-500 mb-16">
                Start Coswasm with Cosmonaut!
              </p>
            </div>
            <div>
              <Signup href="/">
                <img
                  class="block rounded-full bg-white py-1.5 px-1.5 w-8 h-8 mr-3"
                  src={Github}
                  alt=""
                />
                <span>Sign in with Github</span>
              </Signup>
              <Signup href="/">
                <img
                  class="block rounded-full bg-white py-1.5 px-1.5 w-8 h-8 mr-3"
                  src={Google}
                  alt=""
                />
                <span>Sign in with Google</span>
              </Signup>
              <p class="text-center text-orange-400 font-extrabold">
                Already have accounts?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
