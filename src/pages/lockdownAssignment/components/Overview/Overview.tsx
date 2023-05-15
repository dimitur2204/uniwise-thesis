import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import './Overview.css';
import { ToolbarIcon } from '../Toolbar/Toolbar';
import OverviewImg from '../../../../assets/images/overview.png';
import Flag from '../../../../assets/images/flag.png';
import FlagGreen from '../../../../assets/images/flagGreen.png';
import Close from '../../../../assets/images/close.png';
import { Checkbox } from '@uniwise/flow-ui-react';
import questionsData from '../../data/Quiz.json';

interface Props {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  selectedOptionIndices: (number | null)[];
  handleToggleOverview: () => void;
  handleFlag: () => void;
  flagged: (boolean | null)[];
}

const Overview: React.FC<Props> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedOptionIndices,
  handleToggleOverview,
  handleFlag,
  flagged,
}) => {
  const [showFlagged, setShowFlagged] = useState(false);
  const [showUnattempted, setShowUnattempted] = useState(false);

  const handleQuestionClick = (index: number) => {
    const qaDiv = document.querySelector('.question-and-answers');
    if (qaDiv) {
      qaDiv.classList.add('fade-out');
      setTimeout(() => {
        setCurrentQuestionIndex(index);
        qaDiv.classList.remove('fade-out');
        qaDiv.classList.add('fade-in');
        setTimeout(() => {
          qaDiv.classList.remove('fade-in');
        }, 300);
      }, 300);
    }
    
  };

  const getFilteredQuestionIds = () => {
    const filteredQuestionIds: number[] = [];
    questionsData.questions.forEach((question, index) => {
      if (showFlagged && !flagged[index]) {
        filteredQuestionIds.push(question.id);
      } else if (showUnattempted && selectedOptionIndices[index] !== null) {
        filteredQuestionIds.push(question.id);
      }
    });
    return filteredQuestionIds;
  };

  const isQuestionFiltered = (questionId: number) => {
    const filteredQuestionIds = getFilteredQuestionIds();
    return filteredQuestionIds.includes(questionId);
  };

  return (
    <>
      <div className="overviewHeader">
        <div className="overviewHeaderTitle">
          <h2>Overview</h2>
        </div>
        <div className="overviewHeaderCloseIcon">
          <IconButton className="notepad-button" onClick={handleToggleOverview}>
            <img src={Close} alt="close" />
          </IconButton>
        </div>
      </div>{' '}
      <div className="filters">
        <Checkbox
          label="Flagged"
          checked={showFlagged}
          onChange={() => setShowFlagged(!showFlagged)}
        />
        <Checkbox
          label="Unattepmted"
          checked={showUnattempted}
          onChange={() => setShowUnattempted(!showUnattempted)}
        />
      </div>
      <div className="questionIDs">
        {questionsData.questions.map((question, index) => {
          if (isQuestionFiltered(question.id)) {
            return null;
          }
          return (
            <div
              id={`question-${question.id}`}
              className={question.id === currentQuestionIndex + 1 ? 'selectedIdBox' : 'idBox'}
              key={question.id}
              onClick={() => {
                handleQuestionClick(index);
                handleToggleOverview();
              }}
            >
              {flagged[index] ? (
                <img src={FlagGreen} alt="flagGreen" className="flagGreen" />
              ) : (
                <p>{question.id}</p>
              )}
              {typeof selectedOptionIndices[index] === 'number' ? (
                <div className="idBottomIndicator"></div>
              ) : null}
              {question.id === currentQuestionIndex + 1 && <div className="triangle"></div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Overview;
