import logo from './logo.svg';
import './Button.css';

function Button({value,onClick}) {
  return (
      <button className="dice-button" onClick={onClick}> {value}</button>
  );
}

export default Button;
