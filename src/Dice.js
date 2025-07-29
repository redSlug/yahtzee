import "./Dice.css";

function Dice({ value, onClick }) {
  return (
    <button className="dice-button" onClick={onClick}>
      {" "}
      {value}
    </button>
  );
}

export default Dice;
