import "./TheLuckyOne.css";
import React, { useEffect, useState } from "react";
import useDencrypt from "use-dencrypt-effect";

export default function TheLuckyOne({ theLuckyOne }) {
  const [finished, setFinished] = useState(false);
  let values = ["Next lucky fish: ", theLuckyOne];
  useEffect(() => {
    setFinished(false);
  }, [theLuckyOne]);
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    if (!finished) {
      let i = 0;

      const action = setInterval(() => {
        dencrypt(values[i]);

        i = i === values.length - 1 ? 0 : i + 1;
        if (i === 0) {
          setFinished(true);
          clearInterval(action);
        }
      }, 1000);

      return () => clearInterval(action);
    }
  });
  return (
    <div className="theLuckyOne__container unMarkable">
      <h3 className="theLuckyOne__itsYou">🚀 Its you! 👩‍🎤</h3>
      <h2 className="theLuckyOne__text  glow">✨{result} ✨</h2>
    </div>
  );
}
