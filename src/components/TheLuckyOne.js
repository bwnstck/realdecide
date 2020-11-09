import "./TheLuckyOne.css";
import React, { useEffect, useState } from "react";
import useDencrypt from "use-dencrypt-effect";

export default function TheLuckyOne({ theLuckyOne }) {
  const [finished, setFinished] = useState(false);
  const { result, dencrypt } = useDencrypt();

  let values = ["Next fish: ", theLuckyOne];

  useEffect(() => {
    setFinished(false);
  }, [theLuckyOne]);

  useEffect(() => {
    if (!finished) {
      let i = 0;

      const action = setInterval(() => {
        dencrypt(values[i]);

        i = i === 0 ? i + 1 : 0;
        if (i === 0) {
          setFinished(true);
          clearInterval(action);
        }
      }, 500);

      return () => clearInterval(action);
    }
  });
  return (
    <div className="theLuckyOne__container unMarkable">
      <h2 className="theLuckyOne__text  glow">✨{result} ✨</h2>
    </div>
  );
}
