import "./Value.css";
import React from "react";
import RandomPic from "./RandomPic";

export default function Value({ value, setValues, values }) {
  return (
    <li
      className="value"
      onClick={(event) => {
        if (event.altKey) {
          const filteredArray = values.filter((item) => item.id !== value.id);
          setValues(filteredArray);
        } else {
          alert("To delete entry press the <Alt> Key.");
        }
      }}
    >
      <RandomPic index={value.houseIndex} />
      {value.name}

      <p className="ids">#{value.id}</p>
    </li>
  );
}
