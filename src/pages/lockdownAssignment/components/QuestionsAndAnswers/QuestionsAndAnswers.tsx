import React, { useState } from 'react';
import questionsData from '../../data/Quiz.json';
import { Radio } from 'semantic-ui-react';
import { WfButton } from '@uniwise/flow-ui-react';
import './QuestionAndAnswers.css';

interface Props {
  currentQuestionIndex: number;
  handleNextQuestion?: () => void;
  handlePreviousQuestion?: () => void;
  handleOptionSelect: (index: number) => void;
  selectedOptionIndices: (number | null)[];
}

const QuestionAndAnswers: React.FC<Props> = ({
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
  handleOptionSelect,
  selectedOptionIndices
}) => {
  
  const currentQuestion = questionsData.questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div>No questions found</div>;
  }

  return (
    <div className="question-and-answers">
      <h2>{currentQuestion.question}</h2>

      {currentQuestion.options.map((option, index) => (
        <div className={"optionContainer"} key={index}>
          <div
            className="box"
            style={{
              display: selectedOptionIndices[currentQuestionIndex] === index ? 'block' : 'none',
            }}
          />
          <div className="option" onClick={() => handleOptionSelect(index)}>
            <p>{option}</p>
            <Radio
              name={`radioGroup-${currentQuestionIndex}`}
              checked={selectedOptionIndices[currentQuestionIndex] === index}
            />
          </div>
        </div>
      ))}

      <div className='navigationButtons'>
        {currentQuestionIndex > 0 && (
          <WfButton content="Previous question" onClick={handlePreviousQuestion} />
        )}
        {currentQuestionIndex < questionsData.questions.length - 1 && (
          <WfButton content="Next question" onClick={handleNextQuestion} color="green" />
        )}
        {currentQuestionIndex === questionsData.questions.length - 1 && <WfButton content="Submit" color="green" />}
      </div>
    </div>
  );
};

export default QuestionAndAnswers;
