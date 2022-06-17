import React from "react";
import { Link, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";

const Title = tw.h2`
text-2xl 
md:text-4xl 
text-center 
lg:text-left 
mt-2 
text-orange-400 
lg:mb-8 
mb-6 
font-heading
`;
const List = tw.div`
md:space-y-5 
space-y-3 
md:mx-0 
mx-6`;
const Button = tw.div`flex flex-wrap mt-10 lg:justify-end justify-center`;

function Curriculum() {
  const { id } = useParams();
  const info = [
    { number: 0, title: "Get Ready for Terraforming" },
    {
      number: 1,
      title: "Welcome to Spaceship Factory",
    },
    {
      number: 2,
      title: "Fuel Up and Load the Freight",
    },
    {
      number: 3,
      title: "Prepare to Launch",
    },
    {
      number: 4,
      title: "ESFERA Takeoff",
    },
    { number: 5, title: "Let's Play a Game!" },
  ];
  const goUrl = `/lesson/${id}/chapter/0`;
  return (
    <>
      <div class="w-full mb-14 lg:mb-0 lg:col-span-1 col-span-2 lg:order-2 order-1">
        <div class="max-w-lg px-4 mx-auto">
          <Title>Curriculum</Title>
          <List>
            {info.map(e => {
              const url = `/lesson/${e.number}`;
              return (
                <Link to={url}>
                  <button class="mb-5 flex w-full md:px-6 px-3 md:py-3 py-1 bg-white md:shadow shadow-sm border-2 border-indigo-900 items-center justify-between ease-in-out duration-300 transform hover:scale-105 hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-green-500 active:bg-yellow-500 rounded-md">
                    <span class="md:text-lg text-sm font-heading text-indigo-900">
                      Lesson {e.number}.
                    </span>
                    <span class="md:text-base text-xs font-heading text-indigo-900">
                      {e.title}
                    </span>
                  </button>
                </Link>
              );
            })}
          </List>
          <Button>
            <Link to={goUrl}>
              <button class="inline-block w-full md:w-auto mb-2 md:mb-0 py-4 px-10 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-green-500 hover:to-blue-500 border-3 border-indigo-900 shadow rounded-full transition duration-200 md:mx-0 mx-8 hover:text-white">
                START LESSON
              </button>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Curriculum;
