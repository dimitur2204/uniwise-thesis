import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import './Overview.css'; // you can create a CSS file for the styling
import { ToolbarIcon } from '../Toolbar/Toolbar';
import OverviewImg from '../../../../assets/images/overview.png';
import Close from '../../../../assets/images/close.png';
import { Checkbox } from '@uniwise/flow-ui-react';
import questionsData from '../../data/Quiz.json';

interface Props {
  /*   questions: Array<{
    id: number;
    question: string;
    options: string[];
    answer: string;
  }>; */
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  /* selectedOptionIndices: (number | null)[]; */
}

const Overview: React.FC<Props> = ({
  /* questions, */ currentQuestionIndex,
  setCurrentQuestionIndex,
 /*  selectedOptionIndices, */
}) => {
  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="grayContainer">
      <div className="overviewHeader">
        <div className="overviewHeaderTitle">
          <h2>Overview</h2>
        </div>
        <div className="overviewHeaderCloseIcon">
          <IconButton className="notepad-button">
            <img src={Close} alt="close" />
          </IconButton>
        </div>
      </div>{' '}
      <div className="filters">
        <Checkbox label="Flagged" />
        <Checkbox label="Unattepmted" />
      </div>
      <div className="questionIDs">
        {questionsData.questions.map((question, index) => (
          <div
            id={`question-${question.id}`}
            className="idBox"
            key={question.id}
            onClick={() => handleQuestionClick(index)}
          >
            <p>{question.id}</p>
             <div className="idBottomIndicator"></div>
            {question.id === currentQuestionIndex + 1 && <div className="triangle"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
