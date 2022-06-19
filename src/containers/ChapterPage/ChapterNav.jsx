import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import L0C1Main from "../../components/chapter/lesson0/chapter1/L0C1Main";
import L0C2 from "../../components/chapter/lesson0/chapter2/L0C2";
import L0C3 from "../../components/chapter/lesson0/chapter3/L0C3";
import L0C4 from "../../components/chapter/lesson0/chapter4/L0C4";
import NotCompleted from "../../components/chapter/NotCompleted";

function ChapterNav() {
  const { id, chID } = useParams();
  const [checkId, setCheckId] = useState();
  const [checkChID, setCheckChID] = useState();

  useEffect(() => {
    setCheckId(id);
    setCheckChID(chID);
  }, [id, chID]);
  console.log(checkId);

  if (checkId === "0" && checkChID === "1") {
    return <L0C1Main />;
  } else if (checkId === "0" && checkChID === "2") {
    return <L0C2 />;
  } else if (checkId === "0" && checkChID === "3") {
    return <L0C3 />;
  } else if (checkId === "0" && checkChID === "4") {
    return <L0C4 />;
  } else {
    return <NotCompleted />;
  }
}

export default ChapterNav;
