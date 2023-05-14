import flowMulti from '../../assets/images/flowMulti.svg';
import { IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import CountDownTimer from './components/CountdownTimer';
import { ExitButton, SubmitButton } from './components/ExitAndSubmitButtons';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Loader, Progress } from 'semantic-ui-react';
import QuestionAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers';
import { useState, useEffect } from 'react';
import questionsData from './data/Quiz.json';
import Overview from './components/Overview/Overview';

export default function AssignmentPage() {
  const totalQuestions = questionsData.questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndices, setSelectedOptionIndices] = useState<(number | null)[]>(
    Array(questionsData.questions.length).fill(null),
  );
  const [flagged, setFlagged] = useState<(boolean | null)[]>(
    Array(questionsData.questions.length).fill(null),
  );
  const [showOverview, setShowOverview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const handleOptionSelect = (index: number) => {
    const newSelectedOptionIndices = [...selectedOptionIndices];
    newSelectedOptionIndices[currentQuestionIndex] = index;
    setSelectedOptionIndices(newSelectedOptionIndices);
  };

  const handleFlag = () => {
    setFlagged((prevFlagged) => {
      const newFlagged = [...prevFlagged];
      newFlagged[currentQuestionIndex] = !newFlagged[currentQuestionIndex];
      return newFlagged;
    });
  };

  const isFlagged = flagged[currentQuestionIndex];

  const handleNextQuestion = () => {
    const qaDiv = document.querySelector('.question-and-answers');
    if (qaDiv) {
      qaDiv.classList.add('fade-out');
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        qaDiv.classList.remove('fade-out');
        qaDiv.classList.add('fade-in');
        setTimeout(() => {
          qaDiv.classList.remove('fade-in');
        }, 500);
      }, 500);
    }
  };

  const handlePreviousQuestion = () => {
    const qaDiv = document.querySelector('.question-and-answers');
    if (qaDiv) {
      qaDiv.classList.add('fade-out');
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        qaDiv.classList.remove('fade-out');
        qaDiv.classList.add('fade-in');
        setTimeout(() => {
          qaDiv.classList.remove('fade-in');
        }, 500);
      }, 500);
    }
  };

  return (
    <div className="assignmentBody">
      <div className="mainBar">
        <div className="left">
          <div>
            <img src={flowMulti} alt="flowMulti" />
          </div>
          <div className="flowTitleAndAuthor">
            <h1>Final Exam</h1>
            <p className="gray">By: Josip Brljevic</p>
          </div>
        </div>

        <div className="right">
          <IconButton
            aria-label="settings"
            size="large"
            className="active"
            sx={{
              backgroundColor: '#A3ACA4',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#8F9E91',
                color: 'white',
              },
            }}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>

          <IconButton
            aria-label="message"
            size="large"
            className="active"
            sx={{
              backgroundColor: '#A3ACA4',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#8F9E91',
                color: 'white',
              },
            }}
          >
            <MessageIcon fontSize="large" />
          </IconButton>

          <IconButton
            aria-label="description"
            size="large"
            className="active"
            sx={{
              backgroundColor: '#A3ACA4',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#8F9E91',
                color: 'white',
              },
            }}
          >
            <DescriptionIcon fontSize="large" />
          </IconButton>

          <div className="timer">
            <AccessTimeIcon fontSize="large"></AccessTimeIcon>
            <div className="timerText">
              <CountDownTimer hours={1} minutes={20} seconds={40} />
              <p className="gray">Time left</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="topBarContainer">
          <div className="toolbar">
            <Toolbar
              handleToggleOverview={handleToggleOverview}
              handleFlag={handleFlag}
              isFlagged={isFlagged}
            />
          </div>
          <div className="exitAndSubmit">
            <ExitButton size="large" onClick={() => console.log(showOverview)}>
              Exit
            </ExitButton>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </div>
        <div className="whiteBox">
          {isLoading ? (
            <Loader className="loader" active size="large" />
          ) : (
            <>
              <p>
                Question {currentQuestionIndex + 1}/{totalQuestions}
              </p>
              <Progress
                className="progressBar"
                color="green"
                value={currentQuestionIndex + 1}
                total={totalQuestions}
                progress="ratio"
              />
              <QuestionAndAnswers
                currentQuestionIndex={currentQuestionIndex}
                handleNextQuestion={handleNextQuestion}
                handlePreviousQuestion={handlePreviousQuestion}
                handleOptionSelect={handleOptionSelect}
                selectedOptionIndices={selectedOptionIndices}
                slideDirection={slideDirection}
              />
            </>
          )}
          <div>
            <div className={showOverview ? 'grayContainer visible' : 'grayContainer'}>
              <Overview
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                selectedOptionIndices={selectedOptionIndices}
                handleToggleOverview={handleToggleOverview}
                handleFlag={handleFlag}
                flagged={flagged}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
