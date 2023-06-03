import { useState, useEffect } from 'react';
import { IconButton, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';
import DescriptionIcon from '@mui/icons-material/Description';
import { Loader, Progress } from 'semantic-ui-react';
import { Toolbar } from './components/Toolbar/Toolbar';
import { SettingModal } from './components/SettingsModal/SettingsModal';
import { SubmitModal } from './components/SubmissionModal/SubmissionModal';
import { ExitModal } from './components/ExitModal/ExitModal';
import QuestionAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers';
import Overview from './components/Overview/Overview';
import CountDownTimer from './components/CountdownTimer';
import flowMulti from '../../assets/images/flowMulti.svg';
import questionsData from './data/Quiz.json';
import { Tooltip } from '@uniwise/flow-ui-react';
import PaintApp from './components/Canvas/Canvas';

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
  const [showWrite, setShowWrite] = useState(false);
  const [showDrawings, setShowDrawings] = useState(true);
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const handleWriteOpen = () => {
    setShowWrite(!showWrite);
    setShowDrawings(true);
  };

  const handleShowDrawings = () => {
    setShowDrawings(!showDrawings);
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
        }, 300);
      }, 300);
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
        }, 300);
      }, 300);
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
          <SettingModal></SettingModal>

          <Tooltip text="Messages">
            <Button
              aria-label="message"
              size="large"
              className='topBarBtn'
              variant="contained"
              color="secondary"
              sx={{padding: "12px"}}
            >
              <MessageIcon fontSize="large" />
            </Button>
          </Tooltip>

          <Tooltip text="Description">
            <Button
              aria-label="description"
              size="large"
              className='topBarBtn'
              variant="contained"
              color="secondary"
              sx={{padding: "12px"}}
            >
              <DescriptionIcon fontSize="large" />
            </Button>
          </Tooltip>

          <div className="timer">
            <AccessTimeIcon color='secondary' fontSize="large"></AccessTimeIcon>
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
              handleWriteOpen={handleWriteOpen}
              handleShowDrawings={handleShowDrawings}
              handleToggleOverview={handleToggleOverview}
              handleFlag={handleFlag}
              isFlagged={isFlagged}
            />
          </div>
          <div className="exitAndSubmit">
            <ExitModal />
            <SubmitModal selectedOptionIndices={selectedOptionIndices} />
          </div>
        </div>
        <div className="whiteBox">

            <PaintApp showWrite={showWrite} currentQuestionIndex={currentQuestionIndex} showDrawings={showDrawings} />
    
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
