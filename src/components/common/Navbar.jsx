import React from "react";
import Logo from "../../assets/images/logo-v4.svg";
import Account from "../../assets/images/account8.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="fixed top-0 w-full z-50">
        <nav class="transition delay-200 ease-in-out duration-200 opacity-0 flex hover:opacity-100 focus:opacity-100 justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl">
          <a class="text-lg font-bold" href="/">
            <img class="md:h-9 h-8 py-1" src={Logo} alt="" width="auto" />
          </a>
          <div class="xl:hidden flex items-center">
            <div class="inline-block relative md:mr-2 mr-1 mt-0.5">
              <select class="appearance-none block bg-white bg-opacity-0 text-white text-xs font-semibold duration-200 px-2 py-0.5 pr-8 leading-6">
                <option>ENG</option>
                <option>KOR</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </span>
            </div>

            {/* 클릭 시, MyPage로 이동 */}
            <Link to="/mypage">
              <button class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm">
                <img src={Account} alt="" width="auto" />
              </button>
            </Link>
          </div>

          <div class="hidden xl:flex items-center">
            <div class="inline-block relative mr-2 mt-0.5">
              <select class="appearance-none block bg-white bg-opacity-0 text-white text-sm font-semibold duration-200 px-3 py-0.5 pr-8 leading-6">
                <option>ENG</option>
                <option>KOR</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </span>
            </div>
            <Link to="/signup">
              <button class="inline-block px-4 ml-2 text-center leading-6 text-sm text-white border-2 shadow-md transition duration-200 rounded-full py-0.5 bg-green-500 hover:bg-yellow-500 border-indigo-900 hover:text-indigo-900 font-heading">
                SIGN IN
              </button>
            </Link>
          </div>
        </nav>
      </div>

      <div class="w-full">
        <nav class="flex justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl ">
          <a class="text-lg font-bold" href="/">
            <img class="md:h-9 h-8 py-1" src={Logo} alt="" width="auto" />
          </a>
          <div class="xl:hidden flex items-center">
            <div class="inline-block relative md:mr-2 mr-1 mt-0.5">
              <select class="appearance-none block bg-white bg-opacity-0 text-white text-xs font-semibold duration-200  px-2 py-0.5 pr-8 leading-6">
                <option>ENG</option>
                <option>KOR</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </span>
            </div>
            <Link to="/signup">
              <button
                class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm"
                href="/"
              >
                <img class="" src={Account} alt="" width="auto" />
              </button>
            </Link>
          </div>

          <div class="hidden xl:flex items-center">
            <div class="inline-block relative mr-2 mt-0.5">
              <select class="appearance-none block bg-white bg-opacity-0 text-white text-sm font-semibold duration-200  px-3 py-0.5 pr-8 leading-6">
                <option>ENG</option>
                <option>KOR</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </span>
            </div>
            <Link to="/signup">
              <button
                class="inline-block px-4 ml-2 text-center leading-6 text-sm text-white border-2 shadow-md transition duration-200 rounded-full py-0.5 bg-green-500 hover:bg-yellow-500 border-indigo-900 hover:text-indigo-900 font-heading"
                href="/"
              >
                SIGN IN
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
