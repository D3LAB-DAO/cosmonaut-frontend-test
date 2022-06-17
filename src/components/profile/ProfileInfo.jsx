import React, { useContext } from "react";
import { ContentContext } from "../../libs/ContentContext";

function ProfileInfo() {
  const content = useContext(ContentContext);
  return (
    <>
      <div>
        <h4 class="text-2xl text-indigo-900 font-heading mb-1">
          Lesson {content.number}
        </h4>
        <h3 class="text-lg text-indigo-900 font-heading mb-4">
          {content.title}
        </h3>
      </div>
      {/* {info.map(key => (
        <div>
          <h4 class="text-2xl text-indigo-900 font-heading mb-1">
            Lesson {key.number}
          </h4>
          <h3 class="text-lg text-indigo-900 font-heading mb-4">{key.title}</h3>
        </div>
      ))} */}
    </>
  );
}

export default ProfileInfo;
