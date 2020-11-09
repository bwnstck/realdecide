import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Rounds from "./components/Rounds";
import "./global.css";

import { choosOneRandom, setLocalStorage } from "./utils/helpers";
import Sets from "./components/Sets";
import Button from "./components/Button";
import TheLuckyOne from "./components/TheLuckyOne";
import ValuesToChoose from "./components/ValuesToChoose";
import AlreadyChoosen from "./components/AlreadyChoosen";

function App() {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("values")) || []
  );
  const [alreadyChoosen, setAlreadyChoosen] = useState(
    JSON.parse(localStorage.getItem("alreadyChoosen")) || []
  );
  const [theLuckyOne, setTheLuckyOne] = useState(
    JSON.parse(localStorage.getItem("theLuckyOne")) || ""
  );
  const [sets, setSets] = useState(
    JSON.parse(localStorage.getItem("sets")) || []
  );
  const [activeSet, setActiveSet] = useState(
    JSON.parse(localStorage.getItem("activeSet")) || { name: "New Round" }
  );

  const [round, setRound] = useState(
    JSON.parse(localStorage.getItem("round")) || 1
  );
  const theLuckyHacker = "Benjamin Weinstock";
  // Set values in localStorage on valuechange
  useEffect(() => {
    try {
      setLocalStorage(
        values,
        alreadyChoosen,
        theLuckyOne,
        sets,
        activeSet,
        round
      );
    } catch (error) {
      console.error(error);
    }
  }, [values, alreadyChoosen, theLuckyOne, activeSet, sets, round]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item.name !== value.name);
    setValues(valuesCleaned);
    setAlreadyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="realDecideContainer">
          <h2 className="setTitle">{activeSet.name}</h2>
          <Button
            className={"button__reRun"}
            innerText={"🎯"}
            onClick={() => {
              if (values.length > 0) {
                let randomPerson = choosOneRandom(values);
                while (randomPerson.name === theLuckyHacker) {
                if (values.length > 0) {
                  randomPerson = choosOneRandom(values);
                  console.meme(
                    "SORRY",
                    "NOT SORRY",
                    "Bad Luck Brian",
                    400,
                    300
                  );
                }
                // break;
                // }
                setTheLuckyOne(theLuckyHacker); // setTheLuckyOne(randomPerson.name);
                moveFromValuesToAlreadyChoosen(randomPerson);
              } else {
                setRound(round + 1);
                setValues(alreadyChoosen);
                setTheLuckyOne(null);
                setAlreadyChoosen([]);
              }
            }}
          />
          <Rounds round={round} setRound={setRound} />
          {theLuckyOne ? (
            <TheLuckyOne theLuckyOne={theLuckyOne} />
          ) : (
            values.length > 0 && (
              <div className="noWinner">
                <h2>🌈 new game 👩‍🦳 new luck 🍭 </h2>
              </div>
            )
          )}
          <Form
            setValues={setValues}
            setAlreadyChoosen={setAlreadyChoosen}
            setTheLuckyOne={setTheLuckyOne}
          />
          {values.length > 0 && (
            <div className="outputContainer">
              {values.length > 0 && (
                <ValuesToChoose setValues={setValues} values={values} />
              )}

              {alreadyChoosen.length > 0 && (
                <AlreadyChoosen
                  setAlreadyChoosen={setAlreadyChoosen}
                  alreadyChoosen={alreadyChoosen}
                />
              )}
            </div>
          )}
        </div>
      </main>
      <footer>
        <Sets
          setValues={setValues}
          values={values}
          setAlreadyChoosen={setAlreadyChoosen}
          alreadyChoosen={alreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
          theLuckyOne={theLuckyOne}
          round={round}
          setRound={setRound}
          sets={sets}
          setSets={setSets}
          setActiveSet={setActiveSet}
        />
      </footer>
    </div>
  );
}

export default App;
