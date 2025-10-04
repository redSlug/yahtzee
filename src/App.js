import "./App.css";
import Dice from "./Dice";
import ScoreCard from "./Scorecard";

import { useState } from "react";
import { deepClone } from "./utilities";
import RollButton from "./RollButton";

const INITIAL_ROLL_COUNT = 3;

function getInitialScoreCard() {
  return {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    totalScore: 0,
  };
}

function getRandomValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollAllDice() {
  return Array.from({ length: 5 }, () => {
    return { value: getRandomValue(), isPressed: false };
  });
}

function App() {
  const [allDice, setAllDice] = useState(rollAllDice());
  const [rollCount, setRollCount] = useState(INITIAL_ROLL_COUNT);
  const [scoreCard, setScoreCard] = useState(getInitialScoreCard());
  function diceClickCallback(index) {
    let newDice = deepClone(allDice);
    newDice[index].isPressed = !newDice[index].isPressed;

    setAllDice(newDice);
  }

  function rollNonPressedDice() {
    setRollCount(rollCount - 1);
    console.log(rollCount);
    let newDice = deepClone(allDice);
    for (let i = 0; i < newDice.length; i++) {
      if (newDice[i].isPressed) {
        newDice[i].value = allDice[i].value;
      } else {
        newDice[i].value = getRandomValue();
      }
    }
    setAllDice(newDice);
  }

  function updateScoreCard(newScoreCard) {
    setScoreCard(newScoreCard);
    setAllDice(rollAllDice);
    setRollCount(INITIAL_ROLL_COUNT);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RollButton
          onClick={rollNonPressedDice}
          isDisabled={rollCount <= 0}
        ></RollButton>
        <div className={"roll-count-message"}>
          you have {rollCount} rolls left!{" "}
          {rollCount === 0 ? "you must click score card" : ""}
        </div>
        <div>
          {allDice.map((item, index) => (
            <Dice
              value={item.value}
              key={index}
              onClick={() => diceClickCallback(index)}
              isPressed={item.isPressed}
            ></Dice>
          ))}
        </div>
        <ScoreCard
          allDice={allDice}
          scoreCard={scoreCard}
          handleScoreCardUpdate={updateScoreCard}
        ></ScoreCard>
      </header>
    </div>
  );
}

export default App;
