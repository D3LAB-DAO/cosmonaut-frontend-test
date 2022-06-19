import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import L0C1 from "./L0C1";
import L0C2 from "./L0C2";

function ChapterNav() {
  const { id } = useParams();
  const [check, setCheck] = useState();

  useEffect(() => {
    setCheck(id);
  }, [id]);
  console.log(check);

  if (check === "0") {
    return <L0C1 />;
  } else if (check === "1") {
    return <L0C2 />;
  }
}

export default ChapterNav;
