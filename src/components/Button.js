import React from "react";
import styled from "styled-components";

const ButtonSubmit = styled.button`
  font-family: var(--titelFont);
  font-size: 1rem;
  border-radius: 10px;
  max-width: 10rem;
  margin: 1rem auto;
  padding: 1rem 3rem;
`;

export default function Button({ className, onClick, innerText }) {
  return (
    <ButtonSubmit
      tabIndex={"0"}
      className={`button glow-on-hover ${className}`}
      onClick={onClick}
    >
      {innerText}
    </ButtonSubmit>
  );
}
