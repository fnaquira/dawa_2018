import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try.</div>;
  
  return (
    <div className="results-container">
      <h2>Resultados del Examen</h2>
      <div>Has respondido...</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Tu puntaje final es <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Reiniciar Examen</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;