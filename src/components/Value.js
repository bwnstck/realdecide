import "./Value.css";
import React from "react";

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
      {value.house}
      {value.name}

      <p className="ids">#{value.id}</p>
    </li>
  );
}
