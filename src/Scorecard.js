import "./ScoreCard.css";

function ScoreCard({ value }) {
  return (
    <>
      <p className="score-card-header">ScoreCard</p>
      <div className="score-row">
        ones<button type="button">Choose</button>
      </div>
      <div className="score-row">
        twos<button type="button">Choose</button>
      </div>
      <div className="total-score">Total Score = 0</div>
    </>
  );
}

export default ScoreCard;
