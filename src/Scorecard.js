import "./ScoreCard.css";

function ScoreCard({ scoreCard, handleScoreCardUpdate }) {
  function updateScore() {
    handleScoreCardUpdate({ ...scoreCard, totalScore: 1000 });
  }
  return (
    <>
      <p className="score-card-header">ScoreCard</p>
      <div className="score-row">
        ones: {scoreCard.ones}
        <button type="button" onClick={updateScore}>
          Choose
        </button>
      </div>
      <div className="score-row">
        twos: {scoreCard.twos}
        <button type="button" onClick={updateScore}>
          Choose
        </button>
      </div>
      <div className="total-score">Total Score = {scoreCard.totalScore}</div>
    </>
  );
}

export default ScoreCard;
