import styled from "styled-components";
import React from "react";

const HeaderStyled = styled.div`
  background-color: var(--background-color);
  background: rgb(49, 10, 107);
  background: linear-gradient(
    180deg,
    rgba(49, 10, 107, 1) 0%,
    rgba(102, 51, 153, 1) 100%
  );
  color: var(--foreground-color);
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h1
        css={`
          margin-top: 4rem;
        `}
      >
        -= Real 🎯 Decide =-
      </h1>
      <h5
        css={`
          margin-bottom: 5rem;
        `}
      >
        {" "}
        localStorage(📦) - Version
      </h5>
    </HeaderStyled>
  );
}
