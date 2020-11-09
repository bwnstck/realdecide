import { useState } from "react";
import Button from "./Button";
import styled from "styled-components/macro";

const Details = styled.details`
  width: 70%;
  min-width: 300px;
  margin: 2rem auto;
  padding: 1rem;
  background: rgb(151, 140, 210);
  border-radius: 5px;
  summary {
    margin: auto;
    color: var(--text-color);
    letter-spacing: 2px;
    text-shadow: 1px 0 5px black;
    font-family: var(--textFont);
    font-size: 1.5rem;
  }
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

const PersonsInput = styled.textarea`
  min-height: 100px;
  padding: 10px;
  border-radius: 5px;
`;

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\n/g);

  const generateID = () => Math.floor(Math.random() * 10000);

  const getRandomHouseIndex = () => {
    return Math.floor(Math.random() * 4);
  };

  function inputValueToObj(inputText, seperator) {
    const replaceDigit = inputText.replace(/\d+/g, "");
    const inputArray = replaceDigit.split(seperator);
    const outputArray = inputArray.map((name) => {
      let houseIndex = getRandomHouseIndex();
      let ID = generateID();
      let result = { id: ID, name: name.trim(), houseIndex: houseIndex };
      return result;
    });
    return outputArray;
  }

  return (
    <Details open={true}>
      <summary>🖋 Input ✏️</summary>
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
    </Details>
  );
}
