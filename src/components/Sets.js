import React, { useState } from "react";
import styled from "styled-components/macro";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Sets.css";
export default function Sets({
  values,
  setValues,
  alreadyChoosen,
  setAlreadyChoosen,
  theLuckyOne,
  setTheLuckyOne,
  round,
  setRound,
  sets,
  setSets,
  setActiveSet,
}) {
  const StyledTippy = styled(Tippy)`
    margin: 1rem auto;
    text-align: center;
    &:hover {
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
    }
  `;

  const SetToolTip = styled.div`
    background-color: var(--action-background);
    padding: 1rem;
  `;

  const SetListSetButton = styled.button`
    margin: 0.5rem;
    min-width: 80px;
    font-size: 1rem;
    background-color: var(--background-dark);
    color: white;
    border: var(--action-text);
    border-radius: 5px;
  `;

  const Sets = styled.h2`
    margin: auto;
    color: var(--text-color);
    letter-spacing: 2px;
    text-shadow: 2px 0px 1px var(--background-dark);
    font-family: var(--titelFont);
    font-size: 1.5rem;
    &:hover {
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
    }
  `;

  const [setName, setSetName] = useState("");
  //   const [visible, setVisible] = useState(false);

  //   const toggleButton = () => {
  //     setVisible(!visible);
  //   };
  return (
    <StyledTippy
      //   visible={visible}
      allowHTML={true}
      interactive={true}
      theme={"light"}
      content={
        <SetToolTip>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              setSets([
                ...sets,
                {
                  name: setName,
                  values: values,
                  alreadyChoosen: alreadyChoosen,
                  theLuckyOne: theLuckyOne,
                  round: round,
                },
              ]);
            }}
          >
            <input
              type="text"
              placeholder=" Save current as set"
              onChange={(event) => {
                setSetName(event.target.value);
              }}
            ></input>
          </form>
          {sets?.map((set) => {
            return (
              <SetListSetButton
                key={set.name}
                onClick={(event) => {
                  event.preventDefault();
                  if (event.altKey) {
                    setSets(() => {
                      const cleanedArray = sets.filter(
                        (setItem) => setItem.name !== set.name
                      );
                      setSets(cleanedArray);
                    });
                  } else {
                    setValues(set.values);
                    setAlreadyChoosen(set.alreadyChoosen);
                    setTheLuckyOne(set.theLuckyOne);
                    setRound(set.round);
                    setActiveSet(set);
                  }
                }}
              >
                <p>{set.name}</p>
              </SetListSetButton>
            );
          })}
        </SetToolTip>
      }
    >
      <Sets
      //   onClick={toggleButton}
      >
        Sets
      </Sets>
    </StyledTippy>
  );
}
