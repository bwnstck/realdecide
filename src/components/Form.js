import "./Form.css";
import { useState } from "react";
import Button from "./Button";
import Gryffindor from "../img/Gryffindor.png";
import Slytherin from "../img/Slytherin.png";
import Hufflepuff from "../img/Hufflepuff.png";
import Ravenclaw from "../img/Ravenclaw.png";

export default function Form({ setValues, setAlreadyChoosen, setTheLuckyOne }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(/\d+\s+/g);

  const generateID = () => Math.floor(Math.random() * 10000);

  const randomHouse = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    const randomPics = [Gryffindor, Slytherin, Hufflepuff, Ravenclaw];
    const altHouse = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    const chosenPic = randomPics[randomNumber];
    const chosenAlt = altHouse[randomNumber];

    console.log(chosenPic);
    return <img src={chosenPic} alt={chosenAlt} />;
  };

  function inputValueToObj(inputText, seperator) {
    const inputArray = inputText.split(seperator);
    const outputArray = inputArray.map((name) => {
      let house = randomHouse();
      let ID = generateID();
      let result = { id: ID, name: name.trim(), house: house };
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
        <input
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
