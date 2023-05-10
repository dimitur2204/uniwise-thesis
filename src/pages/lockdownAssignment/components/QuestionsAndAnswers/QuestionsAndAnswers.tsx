import React from 'react';
import questionsData from '../../data/Quiz.json';

interface State {
  currentQuestionIndex: number;
}

class QuestionAndAnswers extends React.Component<{}, State> {
  state: State = {
    currentQuestionIndex: 0,
  };

  render() {
    const currentQuestion = questionsData.questions[this.state.currentQuestionIndex];

    return (
      <div>
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <button onClick={this.handleNextQuestion}>Next question</button>
      </div>
    );
  }

  handleNextQuestion = () => {
    this.setState((prevState) => ({ currentQuestionIndex: prevState.currentQuestionIndex + 1 }));
  };
}

export default QuestionAndAnswers;
