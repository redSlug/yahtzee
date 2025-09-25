import "./RollButton.css";

function RollButton({ onClick, isDisabeled }) {
  return (
    <button
      type="button"
      className="roll-button"
      disabled={isDisabeled}
      onClick={onClick}
    >
      Roll
    </button>
  );
}

export default RollButton;
