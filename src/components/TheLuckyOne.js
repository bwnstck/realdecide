import styled from "styled-components/macro";
import React from "react";

const LuckyOneContainer = styled.div`
  margin: 1rem auto;
  padding: 1rem 0rem 0;
  h3 {
    margin: 1rem 0 auto;
  }
`;

const LuckyOneText = styled.h2`
  display: inline-block;
  margin: 0.5rem auto 3rem;
  color: var(--action-text);
  background-color: var(--action-text);
  padding: 0.5rem;
  text-shadow: 0 -2 5px var(--background-dark),
    0px 2px 5px var(--background-dark), -2px -2px var(--background-dark);
  border-radius: 5px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  background-size: 400%;
  animation: glowing 20s linear infinite;
  transition: glowing 0.3s ease-in-out;
  border-radius: 10px;
`;

export default function TheLuckyOne({ theLuckyOne }) {
  return (
    <LuckyOneContainer>
      <h3>🚀 Its you! 👩‍🎤</h3>
      <LuckyOneText className="theLuckyOne__text  glow">
        ✨ {theLuckyOne} ✨
      </LuckyOneText>
    </LuckyOneContainer>
  );
}
