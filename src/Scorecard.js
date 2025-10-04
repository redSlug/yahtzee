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

  function updateFours() {
    const { newRowScore, newTotal } = getNewRowScore(4, scoreCard.four);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      fours: newRowScore,
    });
  }

  function updateFives() {
    const { newRowScore, newTotal } = getNewRowScore(5, scoreCard.fives);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      fives: newRowScore,
    });
  }

  function updateSixes() {
    const { newRowScore, newTotal } = getNewRowScore(6, scoreCard.sixes);
    return handleScoreCardUpdate({
      ...scoreCard,
      totalScore: newTotal,
      sixes: newRowScore,
    });
  }

  return (
    <>
      <p className="score-card-header">ScoreCard</p>
      <div className="score-row">
        ones: {scoreCard.ones}
        <button
          type="button"
          disabled={scoreCard.ones !== undefined}
          onClick={updateOnes}
        >
          Choose
        </button>
      </div>
      <div className="score-row">
        twos: {scoreCard.twos}
        <button
          type="button"
          disabled={scoreCard.twos !== undefined}
          onClick={updateTwos}
        >
          Choose
        </button>
      </div>
      <div className="score-row">
        threes: {scoreCard.threes}
        <button
          type="button"
          disabled={scoreCard.threes !== undefined}
          onClick={updateThrees}
        >
          Choose
        </button>
      </div>

      <div className="score-row">
        fours: {scoreCard.fours}
        <button
          type="button"
          disabled={scoreCard.fours !== undefined}
          onClick={updateFours}
        >
          Choose
        </button>
      </div>

      <div className="score-row">
        fives: {scoreCard.fives}
        <button
          type="button"
          disabled={scoreCard.fives !== undefined}
          onClick={updateFives}
        >
          Choose
        </button>
      </div>

      <div className="score-row">
        sixes: {scoreCard.sixes}
        <button
          type="button"
          disabled={scoreCard.sixes !== undefined}
          onClick={updateSixes}
        >
          Choose
        </button>
      </div>

      <div className="total-score">Total Score = {scoreCard.totalScore}</div>
    </>
  );
}

export default ScoreCard;
