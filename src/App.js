import "./App.css";
import Button from "./Button";

import { useState } from "react";

function getRandomValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function getAllDice() {
  return Array.from({ length: 5 }, () => getRandomValue());
}

function getNewDice() {}
function App() {
  const [buttonValue, setButtonValue] = useState(getRandomValue());
  const [allDiceList, setAllDiceList] = useState(getAllDice());

  function diceClick() {
    setButtonValue(getRandomValue());
    console.log(getAllDice());
  }

  console.log(allDiceList);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {allDiceList.map((item, index) => (
            <Button value={item} key={index} onClick={diceClick}></Button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
