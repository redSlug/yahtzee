import logo from './logo.svg';
import './App.css';
import Button from "./Button";

import {useState} from "react";


function getRandomValue(){
  return Math.floor(Math.random()*6)+1;
}

function App() {
  const [buttonValue, setButtonValue] = useState(getRandomValue());
  function buttonClick(){
    setButtonValue(getRandomValue());
  }
  return (
    <div className="App">
      <header className="App-header">

       <Button value={buttonValue} onClick={buttonClick}></Button>
      </header>
    </div>
  );
}

export default App;
