import { useState } from "react";
import Button from "./Button";
import styled from "styled-components";

const DetailsContainer = styled.details`
  width: 70%;
  min-width: 300px;
  margin: 2rem auto;
  padding: 1rem;
  background: rgb(151, 140, 210);
  border-radius: 5px;
`;

const FormElement = styled.form`
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: 1fr;
`;
const LabelElement = styled.label`
  color: var(--text-color);
`;

const FormExtras = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Summary = styled.summary`
  margin: auto;
  color: var(--text-color);
  letter-spacing: 2px;
  text-shadow: 1px 0 5px black;
  font-family: var(--textFont);
  font-size: 1.5rem;
`;

const PersonsInput = styled.input`
  min-height: 100px;
  text-align: center;
  border-radius: 5px;
`;

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\d+\s+/g);

  const generateID = () => Math.floor(Math.random() * 10000);

  function inputValueToObj(inputText, seperator) {
    const inputArray = inputText.split(seperator);
    const outputArray = inputArray.map((name) => {
      let ID = generateID();
      let result = { id: ID, name: name.trim() };
      return result;
    });
    return outputArray;
  }

  return (
    <DetailsContainer open={true}>
      <Summary>🖋 Input ✏️</Summary>
      <FormElement
        onSubmit={(event) => {
          event.preventDefault();
          setAlreadyChoosen([]);
          setTheLuckyOne("");
          setValues(inputValueToObj(inputValue, separator));
        }}
      >
        <PersonsInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="👩‍🎤 Use the separator-Input  ⬇️ ‍"
          className="persons__input"
        />
        <FormExtras>
          <LabelElement htmlFor="persons__inputSeperator">
            seperator:{" "}
          </LabelElement>
          <input
            placeholder={separator}
            onChange={(event) => {
              console.log("Seperator set ", event.target.value);
              setSeparator(event.target.value);
            }}
            id="persons__inputSeperator"
            type="text"
          />
        </FormExtras>
        <Button innerText={"Submit"} />
      </FormElement>
    </DetailsContainer>
  );
}
