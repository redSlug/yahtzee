import "./App.css";
import Dice from "./Dice";

import { useState } from "react";
import { deepClone } from "./utilities";

function getRandomValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollAllDice() {
  return Array.from({ length: 5 }, () => {
    return { value: getRandomValue(), isPressed: false };
  });
}

function App() {
  const [allDiceList, setAllDiceList] = useState(rollAllDice());
  const [rollCount, setRollCount] = useState(3);
  function diceClickCallback(index) {
    let newDiceList = deepClone(allDiceList);
    newDiceList[index].isPressed = !newDiceList[index].isPressed;

    setAllDiceList(newDiceList);
  }

  function rollNonPressedDice() {
    setRollCount(rollCount - 1);
    console.log(rollCount);
    let newDiceList = deepClone(allDiceList);
    for (let i = 0; i < newDiceList.length; i++) {
      if (newDiceList[i].isPressed) {
        newDiceList[i].value = allDiceList[i].value;
      } else {
        newDiceList[i].value = getRandomValue();
      }
    }
    setAllDiceList(newDiceList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          className="roll-button"
          disabled={rollCount === 0}
          onClick={rollNonPressedDice}
        >
          Roll
        </button>
        <div>
          {allDiceList.map((item, index) => (
            <Dice
              value={item.value}
              key={index}
              onClick={() => diceClickCallback(index)}
              isPressed={item.isPressed}
            ></Dice>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
