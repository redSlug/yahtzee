import "./ScoreCard.css";

function ScoreCard({ allDice, scoreCard, handleScoreCardUpdate }) {
  function updateOnes() {
    let initialRowScore = scoreCard.ones | 0;
    let count = allDice.filter((x) => x.value === 1).length;
    let newRowScore = initialRowScore + count;
    let newTotal = scoreCard.totalScore + count;
    handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      ones: newRowScore,
    });
  }

  function updateTwos() {
    let initialRowScore = scoreCard.twos | 0;
    let count = allDice.filter((x) => x.value === 2).length;
    let newRowScore = initialRowScore + count * 2;
    let newTotal = scoreCard.totalScore + count * 2;
    handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      twos: newRowScore,
    });
  }

  return (
    <>
      <p className="score-card-header">ScoreCard</p>
      <div className="score-row">
        ones: {scoreCard.ones}
        <button type="button" onClick={updateOnes}>
          Choose
        </button>
      </div>
      <div className="score-row">
        twos: {scoreCard.twos}
        <button type="button" onClick={updateTwos}>
          Choose
        </button>
      </div>
      <div className="total-score">Total Score = {scoreCard.totalScore}</div>
    </>
  );
}

export default ScoreCard;
