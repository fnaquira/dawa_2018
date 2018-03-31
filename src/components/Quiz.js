import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Pregunta</h2>
          <div className="question-number">{step}</div>
          <div className="description">de <span>{totalQuestions}</span></div>
        </div>
        <h1>Examen 01 DAWA</h1>
        <div className="score-container">
          <h2>Puntaje</h2>
          <div className="score">{score}</div>
          <div className="description">puntos</div>
        </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;
