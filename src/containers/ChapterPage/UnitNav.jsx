import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import L0C1Finish from "../../components/chapter/lesson0/chapter1/unit/L0C1Finish";
import L0C1U1 from "../../components/chapter/lesson0/chapter1/unit/L0C1U1";
import L0C1U2 from "../../components/chapter/lesson0/chapter1/unit/L0C1U2";
import L0C1U3 from "../../components/chapter/lesson0/chapter1/unit/L0C1U3";

import NotCompleted from "../../components/chapter/NotCompleted";

function UnitNav() {
  const { id, chID, uID } = useParams();
  const [checkId, setCheckId] = useState();
  const [checkChID, setCheckChID] = useState();

  useEffect(() => {
    setCheckId(id);
    setCheckChID(chID);
  }, [id, chID]);
  console.log(uID);

  if (checkId === "0" && checkChID === "1" && uID === "1") {
    return <L0C1U1 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "2") {
    return <L0C1U2 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "3") {
    return <L0C1U3 />;
  } else if (checkId === "0" && checkChID === "1" && uID === "4") {
    return <L0C1Finish />;
  } else {
    return <NotCompleted />;
  }
}
export default UnitNav;
