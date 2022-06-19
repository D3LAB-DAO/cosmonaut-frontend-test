import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { BlueContext } from "../../../libs/context/BlueContext";
import Check from "../../common/Check";

const Header = tw.div`bg-blue-500 py-2 lg:py-6 md:py-3`;
const Contents = tw.div`bg-black`;
const Desc = tw.div`lg:w-1/2 w-full md:w-2/3`;
const ContentHeader = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function BlueType() {
  const data = useContext(BlueContext);
  const [msg, setMsg] = useState();
  console.log(data);

  useEffect(() => {
    setMsg(data[0].receiverNFTData);
  }, [data]);
  console.log(msg);
  return (
    <>
      <Header>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-3. Receiver (receiver.rs)
            </h1>
          </div>
        </div>
      </Header>
      {msg?.map(e => (
        <Contents>
          <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
            <Check />
            <Desc>
              <ContentHeader>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </ContentHeader>
              <ContentDesc>
                <p class="font-normal lg:text-base text-sm mb-8">{e.desc1}</p>
                <p class="font-normal lg:text-base text-sm">{e.desc2}</p>
              </ContentDesc>
            </Desc>
          </div>
        </Contents>
      ))}
    </>
  );
}

export default BlueType;
