import "./RealDecide.css";
import styled from "styled-components/macro";
import React from "react";
import Value from "./Value";

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
  padding: 0;
  margin: 1rem auto;
`;

export default function Realdecide({ values, setValues }) {
  return (
    <List>
      {values.map((value) => (
        <Value
          key={value.id}
          value={value}
          values={values}
          setValues={setValues}
        />
      ))}
    </List>
  );
}
