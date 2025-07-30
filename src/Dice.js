import "./Dice.css";

function Dice({ value, onClick, isPressed }) {
  return (
    <button
      className={isPressed ? "dice-button-pressed" : "dice-button"}
      onClick={onClick}
    >
      {" "}
      {value}
    </button>
  );
}

export default Dice;
