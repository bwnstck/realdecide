import "./Form.css";
import { useState } from "react";
import Button from "./Button";

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\n/g);

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
    <details open={true} className="formDetails">
      <summary>🖋 Input ✏️</summary>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          setAlreadyChoosen([]);
          setTheLuckyOne("");
          setValues(inputValueToObj(inputValue, separator));
        }}
      >
        <textarea
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="👩‍🎤 Use the separator-Input  ⬇️ ‍"
          className="persons__input"
        />
        <div className="form__extras">
          <label htmlFor="persons__inputSeperator">seperator: </label>
          <input
            placeholder={separator}
            onChange={(event) => {
              console.log("Seperator set ", event.target.value);
              setSeparator(event.target.value);
            }}
            id="persons__inputSeperator"
            type="text"
          />
        </div>
        <Button className="button__submit" innerText={"Submit"} />
      </form>
    </details>
  );
}
