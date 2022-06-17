import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Editor from "@monaco-editor/react";
import base64 from "base-64";
import { useParams } from "react-router-dom";

const Container = tw.div`w-full lg:w-3/5 md:mx-0`;
const Section = tw.div`container bg-indigo-900 rounded-xl w-full h-full overflow-y-auto`;
const EditorHeader = tw.div`border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const Mobile = tw.div`mx-auto mb-3 px-4`;
const Result = tw.div``;
const ResultHeader = tw.div`border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4`;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

function CodeEditor() {
  const { id, chID } = useParams();
  const [code, setCode] = useState("");
  const handleEditor = value => {
    setCode(value);
  };
  let enc = base64.encode(code); // base64로 변환
  console.log(enc);

  const queryClient = useQueryClient();
  const codeEdit = useMutation(
    code => axios.post("https://cosmonaut.free.beeceptor.com", code),
    {
      onSuccess: data => {
        console.log(data);
        const msg = "success";
        alert(msg);
      },
      onError: () => {
        alert("There was an Error");
      },
      onSettled: () => {
        queryClient.invalidateQueries("create");
      },
    }
  );
  const onCodeEdit = () => {
    codeEdit.mutate(enc);
    console.log(id);
    console.log(chID);
    setCode(""); // state reset
  };
  return (
    <Container>
      <div class="w-full h-full flex-wrap items-center block px-2 py-2 border-3 border-green-500 bg-indigo-500 rounded-2xl h-720px">
        <Section>
          <EditorHeader>
            <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max">
              <a
                class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-blue-500 rounded-t-md focus:ring focus:ring-white"
                href="/"
                alt=""
              >
                Mobile Apps
              </a>
              <a
                class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white"
                href="/"
                alt=""
              >
                Web Design
              </a>
              <a
                class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white"
                href="/"
                alt=""
              >
                Commercial
              </a>
            </div>
          </EditorHeader>
          <Mobile>
            <div class="md:hidden block w-full bg-black py-4 px-5 h-96">
              <h2 class="text-xl font-extrabold text-blue-500">
                Mobile Environment not supported
              </h2>
            </div>
          </Mobile>
          {codeEdit.isLoading ? (
            <button
              disabled
              type="button"
              class="block justify-self-end bg-white font-heading text-gray-300 rounded-full border-3 border-gray-300 py-1 text-sm text-center w-48"
            >
              <svg
                role="status"
                class="inline w-4 h-4 mr-3 text-gray-400 animate-spin"
                viewbox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                ></path>
              </svg>
              Checking...
            </button>
          ) : (
            <>
              <Editor
                height="60vh"
                defaultLanguage="rust"
                defaultValue=""
                theme="vs-dark"
                onChange={handleEditor}
              />
              <Result>
                <ResultHeader>
                  <div class="grid grid-cols-2 items-center justify-between mb-2">
                    <h2 class="text-xl text-blue-500 md:text-3xl font-heading">
                      Result
                    </h2>
                    <button
                      onClick={onCodeEdit}
                      class="block justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48"
                    >
                      check your answer
                    </button>
                    <a
                      class="hidden block justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mx-auto"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      class="hidden block justify-self-end bg-white hover:bg-red-100 font-heading text-red-500 rounded-full border-3 border-red-500 py-1 text-sm text-center w-48"
                      href="/"
                    >
                      submit again
                    </a>
                  </div>
                </ResultHeader>

                <ResultCode>
                  <textarea
                    class="w-full h-24 py-2 px-5 text-md bg-black text-white"
                    name="field-name"
                    rows="7"
                    placeholder="Code here..."
                  ></textarea>
                </ResultCode>
                <ResultResponse>
                  <a
                    class="w-full px-6 flex mt-1 justify-end text-right font-heading text-green-500 underline text-sm md:text-xl"
                    href="/"
                  >
                    Correct! Jump to Next Chapter
                  </a>
                  <a
                    class="w-full px-6 flex mt-1 justify-end text-right font-heading text-red-500 underline text-sm md:text-xl"
                    href="/"
                  >
                    Wrong! Wanna see the Answer?
                  </a>
                  <a
                    class="w-full px-6 flex mt-1 justify-end text-right font-heading text-yellow-500 underline text-sm md:text-xl"
                    href="/"
                  >
                    Hide the Answer
                  </a>
                </ResultResponse>
              </Result>
            </>
          )}
        </Section>
      </div>
    </Container>
  );
}

export default CodeEditor;
