import "./ScoreCard.css";

function ScoreCard({ value }) {
  return (
    <>
      <p className="score-card-header">ScoreCard</p>
      <p className="score-card-body">{value}</p>
    </>
  );
}

export default ScoreCard;
