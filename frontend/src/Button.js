import "./Button.css";

function Button({ label, onClick, isDisabled }) {
  return (
    <button
      type="button"
      className="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
