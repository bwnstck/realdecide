import React from "react";
import Confetti from "react-dom-confetti";

const Confettis = () => {
  return (
    <div className="confetti-wrap">
      <Confetti width={1900} height={1400} tweenDuration={3000} />
    </div>
  );
};

export default Confettis;
