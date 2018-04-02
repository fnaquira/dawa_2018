import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import { questions } from '../data/quiz-data';

import axios from '../axios_dawa';

class QuizApp extends Component {
  constructor(props) {
    super();
    this.state = {
      questions:  [],
      userAnswers: [],
      maxQuestions: 0,
      step: Number.parseInt(props.step,10),
      score: Number.parseInt(props.score,10),
      modal: {
        state: 'hide',
        praise: '',
        points: ''
      }
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentWillMount() {
    const { totalQuestions } = this.props;
    const questions1 = questions.filter((item) =>{
      return this.props.answers.indexOf(''+item.id)===-1;
    });
    const maxQuestions = Math.min(totalQuestions, questions1.length);
    const QUESTIONS = shuffleQuestions(questions1, maxQuestions);

    this.setState({
      questions: QUESTIONS,
      maxQuestions: maxQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      })
    });
  }

  handleAnswerClick(e) {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === e.target.textContent;
    const currentStep = step - 1;
    const tries = isCorrect//userAnswers[currentStep].tries;

    axios.post('users/set_q',{
      user: this.props.user,
      quiz: this.props.quiz,
      step: currentStep,
      question: questions[0].id,
      tries: userAnswers[currentStep]['tries'],
      answer: e.target.textContent,
      isCorrect: isCorrect
    })
      .then(response => {
        if(response.data.error!=null){



          alert('ERROR: '+response.data.error)


        }
      })
      .catch( error => {
          this.setState( { started: false, validating: false } );
      } );

    if(isCorrect && e.target.nodeName === 'LI'){
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      userAnswers[currentStep] = {
        tries: isCorrect//tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });
    }else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      userAnswers[currentStep] = {
        tries: isCorrect//tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

    }
    setTimeout(() => this.showModal(tries), 750);
    setTimeout(this.nextStep, 2750);
  }

  showModal(tries) {
    let praise;
    let points;

    if(tries) {
      praise = 'Bien hecho!';
      points = '+1';
    }else{
      praise = 'Respuesta errónea :(';
      points = '0';
    }

    this.setState({
      modal: {
        state: 'show',
        praise,
        points
      }
    });

  }

  nextStep() {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: (() => {
        /*if (tries === 1) return score + 10;
        if (tries === 2) return score + 5;
        if (tries === 3) return score + 2;*/
        //return score + 1;
        return score + (tries?1:0);
      })(),
      questions: restOfQuestions,
      modal: {
        state: 'hide'
      }
    });
  }

  restartQuiz() {
    window.location.reload();
  }

  render() {
    const { step, questions, userAnswers, maxQuestions, score, modal } = this.state;

    if (step >= maxQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
        />
      );
    } else return (
      <div>
        <Quiz
          step={step}
          questions={questions}
          totalQuestions={maxQuestions}
          score={score}
          handleAnswerClick={this.handleAnswerClick}
        />
        { modal.state === 'show' && <Modal modal={modal} /> }
      </div>
    );
  }
}

QuizApp.defaultProps = {
  totalQuestions: questions.length
};

QuizApp.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};

export default QuizApp;
