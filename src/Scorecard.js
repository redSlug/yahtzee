import "./ScoreCard.css";

function ScoreCard({ allDice, scoreCard, handleScoreCardUpdate }) {
  function getNewRowScore(dieNumber, scoreCardRowValue) {
    let initialRowScore = scoreCardRowValue | 0;
    let count = allDice.filter((x) => x.value === dieNumber).length;
    const newRowScore = initialRowScore + count * dieNumber;
    const newTotal = scoreCard.totalScore + count * dieNumber;
    return { newRowScore, newTotal };
  }

  function updateOnes() {
    const { newRowScore, newTotal } = getNewRowScore(1, scoreCard.ones);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      ones: newRowScore,
    });
  }

  function updateTwos() {
    const { newRowScore, newTotal } = getNewRowScore(2, scoreCard.twos);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      twos: newRowScore,
    });
  }

  function updateThrees() {
    const { newRowScore, newTotal } = getNewRowScore(3, scoreCard.threes);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      threes: newRowScore,
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
      <div className="score-row">
        threes: {scoreCard.threes}
        <button type="button" onClick={updateThrees}>
          Choose
        </button>
      </div>
      <div className="total-score">Total Score = {scoreCard.totalScore}</div>
    </>
  );
}

export default ScoreCard;
