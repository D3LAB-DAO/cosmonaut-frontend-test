import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { GreenContext } from "../../../context/GreenContext";

const Header = tw.div`bg-green-500 py-2 lg:py-6 md:py-3`;
const Contents = tw.div`bg-black pt-14 pb-16 bg-gray-700`;
const Desc = tw.div`w-full lg:w-1/2 md:mx-0 mx-4 rounded-2xl p-6 md:p-10 px-4 mb-6 md:mb-0`;
const ContentHeader = tw.div`flex flex-wrap items-center mb-6`;
const ContentDesc = tw.div`overflow-y-scroll lg:h-60 h-40`;
const Code = tw.div`w-full lg:w-1/2 md:mx-0`;
const CodeHeader = tw.div`flex border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const CodeEditor = tw.div``;

function GreenType() {
  const data = useContext(GreenContext);
  const [msg, setMsg] = useState();
  console.log(data);

  useEffect(() => {
    setMsg(data[0].queriesData);
  }, [data]);
  console.log(msg);
  return (
    <>
      <Header>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-2. Queries (query.rs)
            </h1>
          </div>
        </div>
      </Header>
      {msg?.map(e => (
        <Contents>
          <div class="container mx-auto lg:px-0 px-4 md:px-12">
            <div class="flex w-full flex-wrap justify-center rounded-2xl bg-black">
              <Desc>
                <ContentHeader>
                  <div class="flex justify-center items-center lg:mr-6 md:mr-4 rounded-full bg-gradient-to-r from-yellow-500 to-green-500 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm md:mx-0 mx-auto md:mb-0 mb-2">
                    <span class="text-center font-heading text-2xl text-black">
                      {e.id}
                    </span>
                  </div>
                  <h2 class="xl:text-2xl font-extrabold text-xl text-center lg:text-left w-full md:w-auto">
                    {e.title}
                  </h2>
                </ContentHeader>
                <ContentDesc>
                  <div class="md:pl-16 pl-0">
                    <p class="text-sm text-gray-100 font-normal mb-6 lg:text-base">
                      {e.desc}
                    </p>
                  </div>
                </ContentDesc>
              </Desc>

              <Code>
                <div class="w-full h-full flex-wrap items-center block border-3 border-green-500 rounded-2xl bg-green-500 p-1">
                  <div class="container bg-indigo-900 rounded-xl w-full h-full overflow-y-auto">
                    <CodeHeader>
                      <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max"></div>
                      <a
                        class="block mr-1 py-3 px-2 md:px-4 md:mb-0 overflow-auto bg-orange-400 rounded-t-md ring ring-white"
                        href="/"
                      >
                        {e.title}
                      </a>
                      <a
                        class="block mr-1 py-3 px-2 md:px-4 md:mb-0 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white"
                        href="/"
                      >
                        pub struct
                      </a>
                    </CodeHeader>
                    <CodeEditor> Code Editor Part</CodeEditor>
                  </div>
                </div>
              </Code>
            </div>
          </div>
        </Contents>
      ))}
    </>
  );
}

export default GreenType;
