import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { OrangeContext } from "../../../context/OrangeContext";

const Header = tw.div`bg-orange-400 py-2 lg:py-6 md:py-3`;
const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;

const ContentTitle = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function OrangeType() {
  const data = useContext(OrangeContext);
  const [msg, setMsg] = useState();
  console.log(data);

  useEffect(() => {
    setMsg(data[0].msgData);
  }, [data]);
  console.log(msg);

  return (
    <>
      <Header>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-1. Messages (msg.rs)
            </h1>
          </div>
        </div>
      </Header>
      {msg?.map(e => (
        <Contents>
          <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
            <ContentId>
              <span class="text-center font-heading text-2xl text-black">
                {e.id}
              </span>
            </ContentId>
            <div class="lg:w-1/2 w-full md:w-2/3">
              <ContentTitle>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </ContentTitle>

              <ContentDesc>
                <span class="font-normal lg:text-base text-sm">{e.desc}</span>
              </ContentDesc>
            </div>
          </div>
        </Contents>
      ))}
    </>
  );
}

export default OrangeType;
