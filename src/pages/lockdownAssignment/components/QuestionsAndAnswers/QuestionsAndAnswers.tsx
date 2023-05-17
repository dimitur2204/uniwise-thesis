import React from 'react';
import { Radio } from 'semantic-ui-react';
import questionsData from '../../data/Quiz.json';
import { SubmitModal } from '../SubmissionModal/SubmissionModal';
import './QuestionAndAnswers.css';
import { Button } from '@mui/material';

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
  selectedOptionIndices,
}) => {
  const currentQuestion = questionsData.questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div>No questions found</div>;
  }

  return (
    <div className="question-and-answers">
      <h2>{currentQuestion.question}</h2>

      {currentQuestion.options.map((option, index) => (
        <div className={'optionContainer'} key={index}>
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

      <div className="navigationButtons">
        {currentQuestionIndex > 0 && (
          <Button variant="contained" color="secondary" onClick={handlePreviousQuestion} sx={{ marginRight: '5px' }}>
            Previous question
          </Button>
        )}
        {currentQuestionIndex < questionsData.questions.length - 1 && (
          <Button variant="contained" onClick={handleNextQuestion}>
            Next question
          </Button>
        )}
        {currentQuestionIndex === questionsData.questions.length - 1 && (
          <SubmitModal selectedOptionIndices={selectedOptionIndices} />
        )}
      </div>
    </div>
  );
};

export default QuestionAndAnswers;
