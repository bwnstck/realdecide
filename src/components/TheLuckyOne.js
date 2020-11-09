import "./TheLuckyOne.css";
import React from "react";
import RandomPic from "./RandomPic";

export default function TheLuckyOne({ theLuckyOne }) {
  return (
    <div className="theLuckyOne__container unMarkable">
      <RandomPic index={theLuckyOne.houseIndex} />
      <h3 className="theLuckyOne__itsYou">🚀 Its you! 👩‍🎤</h3>
      <h2 className="theLuckyOne__text  glow">✨ {theLuckyOne.name} ✨</h2>
    </div>
  );
}
