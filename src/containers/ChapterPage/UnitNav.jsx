import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import L0C1Finish from "../../components/chapter/lesson0/chapter1/unit/L0C1Finish";
import L0C1U1 from "../../components/chapter/lesson0/chapter1/unit/L0C1U1";
import L0C1U2 from "../../components/chapter/lesson0/chapter1/unit/L0C1U2";
import L0C1U3 from "../../components/chapter/lesson0/chapter1/unit/L0C1U3";
import L0C2Finish from "../../components/chapter/lesson0/chapter2/unit/L0C2Finish";
import L0C2U1 from "../../components/chapter/lesson0/chapter2/unit/L0C2U1";
import L0C3U1 from "../../components/chapter/lesson0/chapter3/unit/L0C3U1";
import L0C3U2 from "../../components/chapter/lesson0/chapter3/unit/L0C3U2";
import L0C3Finish from "../../components/chapter/lesson0/chapter3/unit/L0C3Finish";

import NotCompleted from "../../components/chapter/NotCompleted";
import L0C4U1 from "../../components/chapter/lesson0/chapter4/unit/L0C4U1";
import L0C4U2 from "../../components/chapter/lesson0/chapter4/unit/L0C4U2";
import L0C4U3 from "../../components/chapter/lesson0/chapter4/unit/L0C4U3";
import L0C4Finish from "../../components/chapter/lesson0/chapter4/unit/L0C4Finish";
import L1C1U1 from "../../components/chapter/lesson1/chapter1/unit/L1C1U1";
import L1C1U2 from "../../components/chapter/lesson1/chapter1/unit/L1C1U2";
import L1C1U3 from "../../components/chapter/lesson1/chapter1/unit/L1C1U3";
import L1C1Finish from "../../components/chapter/lesson1/chapter1/unit/L1C1Finish";

function UnitNav() {
  const { id, chID, uID } = useParams();
  const [checkId, setCheckId] = useState();
  const [checkChID, setCheckChID] = useState();

  useEffect(() => {
    setCheckId(id);
    setCheckChID(chID);
  }, [id, chID, uID]);
  console.log(uID);

  if (checkId === "0" && checkChID === "1" && uID === "1") {
    return <L0C1U1 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "2") {
    return <L0C1U2 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "3") {
    return <L0C1U3 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "4") {
    return <L0C1Finish />;
  } else if (checkId === "0" && checkChID === "2" && uID === "1") {
    return <L0C2U1 />;
  } else if (checkId === "0" && checkChID === "2" && uID === "2") {
    return <L0C2Finish />;
  } else if (checkId === "0" && checkChID === "3" && uID === "1") {
    return <L0C3U1 />;
  } else if (checkId === "0" && checkChID === "3" && uID === "2") {
    return <L0C3U2 />;
  } else if (checkId === "0" && checkChID === "3" && uID === "3") {
    return <L0C3Finish />;
  } else if (checkId === "0" && checkChID === "4" && uID === "1") {
    return <L0C4U1 />;
  } else if (checkId === "0" && checkChID === "4" && uID === "2") {
    return <L0C4U2 />;
  } else if (checkId === "0" && checkChID === "4" && uID === "3") {
    return <L0C4U3 />;
  } else if (checkId === "0" && checkChID === "4" && uID === "4") {
    return <L0C4Finish />;
  } else if (checkId === "1" && checkChID === "1" && uID === "1") {
    return <L1C1U1 />;
  } else if (checkId === "1" && checkChID === "1" && uID === "2") {
    return <L1C1U2 />;
  } else if (checkId === "1" && checkChID === "1" && uID === "3") {
    return <L1C1U3 />;
  } else if (checkId === "1" && checkChID === "1" && uID === "4") {
    return <L1C1Finish />;
  } else {
    return <NotCompleted />;
  }
}
export default UnitNav;
