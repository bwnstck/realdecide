import styled from "styled-components/macro";
import React from "react";

const Wrapper = styled.div`
  background-color: var(--background-color);
  background: rgb(49, 10, 107);
  background: linear-gradient(
    180deg,
    rgba(49, 10, 107, 1) 0%,
    rgba(102, 51, 153, 1) 100%
  );
  color: var(--foreground-color);
  text-align: center;
  h1 {
    margin-top: 4rem;
  }

  h5 {
    margin-bottom: 2rem;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <h1>-= Real 🎯 Decide =-</h1>
      <h5> localStorage(📦) - Version</h5>
    </Wrapper>
  );
}
