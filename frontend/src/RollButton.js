import "./RollButton.css";

function RollButton({ onClick, isDisabled }) {
  return (
    <button
      type="button"
      className="roll-button"
      disabled={isDisabled}
      onClick={onClick}
    >
      Roll
    </button>
  );
}

export default RollButton;
