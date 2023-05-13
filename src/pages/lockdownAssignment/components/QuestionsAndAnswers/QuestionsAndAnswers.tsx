import React, { useState } from 'react';
import questionsData from '../../data/Quiz.json';
import { Radio } from 'semantic-ui-react';
import './QuestionAndAnswers.css';

interface Props {
  currentQuestionIndex: number;
  handleNextQuestion?: () => void;
  handlePreviousQuestion?: () => void;
}

const QuestionAndAnswers: React.FC<Props> = ({
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
}) => {
  const [selectedOptionIndices, setSelectedOptionIndices] = useState<(number | null)[]>(
    Array(questionsData.questions.length).fill(null),
  );
  const handleOptionSelect = (index: number) => {
    const newSelectedOptionIndices = [...selectedOptionIndices];
    newSelectedOptionIndices[currentQuestionIndex] = index;
    setSelectedOptionIndices(newSelectedOptionIndices);
  };

  const currentQuestion = questionsData.questions[currentQuestionIndex];
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

      <div>
        {currentQuestionIndex > 0 && (
          <button onClick={handlePreviousQuestion}>Previous question</button>
        )}
        {currentQuestionIndex < questionsData.questions.length - 1 && (
          <button onClick={handleNextQuestion}>Next question</button>
        )}
        {currentQuestionIndex === questionsData.questions.length - 1 && <div>End of questions</div>}
      </div>
    </div>
  );
};

export default QuestionAndAnswers;
