import React from "react";
import styled from "styled-components/macro";
import Realdecide from "./RealDecide";

const AlreadyChosen = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

export default function AlreadyChoosen({ alreadyChoosen, setAlreadyChoosen }) {
  return (
    <AlreadyChosen>
      <h2>🎯 {alreadyChoosen.length} Already Choosen 🎯</h2>
      <Realdecide values={alreadyChoosen} setValues={setAlreadyChoosen} />
    </AlreadyChosen>
  );
}
