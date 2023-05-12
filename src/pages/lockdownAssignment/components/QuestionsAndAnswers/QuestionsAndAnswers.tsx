import React from 'react';
import questionsData from '../../data/Quiz.json';
import { Radio } from 'semantic-ui-react';
import './QuestionAndAnswers.css';

interface State {
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
}

class QuestionComponent extends React.Component<{}, State> {
  state: State = {
    currentQuestionIndex: 0,
    selectedOptionIndex: null,
  };

  handleOptionSelect = (index: number) => {
    this.setState({ selectedOptionIndex: index });
  };

  render() {
    const currentQuestion = questionsData.questions[this.state.currentQuestionIndex];

    if (!currentQuestion) {
      return <div>No questions found</div>;
    }

    return (
      <div>
        <h2>{currentQuestion.question}</h2>

        {currentQuestion.options.map((option, index) => (
          <div className="optionContainer" key={index}>
            <div
              className="box"
              style={{ display: this.state.selectedOptionIndex === index ? 'block' : 'none' }}
            />
            <div className="option" onClick={() => this.handleOptionSelect(index)}>
              <p>{option}</p>
              <Radio />
            </div>
          </div>
        ))}

        {this.renderNavigationButtons()}
      </div>
    );
  }

  renderNavigationButtons() {
    const hasPreviousQuestion = this.state.currentQuestionIndex > 0;
    const hasNextQuestion = this.state.currentQuestionIndex < questionsData.questions.length - 1;

    return (
      <div>
        {hasPreviousQuestion && (
          <button onClick={this.handlePreviousQuestion}>Previous question</button>
        )}
        {hasNextQuestion && <button onClick={this.handleNextQuestion}>Next question</button>}
        {!hasNextQuestion && <div>End of questions</div>}
      </div>
    );
  }

  handleNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      selectedOptionIndex: null,
    }));
  };

  handlePreviousQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
      selectedOptionIndex: null,
    }));
  };
}

export default QuestionComponent;
