import flowMulti from '../../assets/images/flowMulti.svg';
import { Button, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import CountDownTimer from './components/CountdownTimer';
import { ExitButton, SubmitButton } from './components/ExitAndSubmitButtons';
import { Toolbar } from './components/Toolbar/Toolbar';
import StickyNote from './components/StickyNote/StickyNote';
import Notepad from './components/Notepad/Notepad';
import Notes from '../assets/images/notes.png';
import Collapse from '../../assets/images/reduce.png';
import { Progress, Radio } from 'semantic-ui-react';
import QuestionAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers';
import { useState } from 'react';
import questionsData from './data/Quiz.json';
import SentenceFiller from './components/DragAndDrop/DragAndDrop';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
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

  const handleToggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const handleOptionSelect = (index: number) => {
    const newSelectedOptionIndices = [...selectedOptionIndices];
    newSelectedOptionIndices[currentQuestionIndex] = index;
    setSelectedOptionIndices(newSelectedOptionIndices);
  };

  const handleFlagged = () => {
    const newFlagged = [...flagged];
    newFlagged[currentQuestionIndex] = !newFlagged[currentQuestionIndex];
    setFlagged(newFlagged);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questionsData.questions[currentQuestionIndex];

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

      {/* <div className='whiteBox'>
            <div className='topBarContainer'>
                <div className='toolbar'>
                    <p>toolbar</p>
                </div>
                <div className='exitAndSubmit'>
                    <Button>Exit</Button>
                    <Button>Submit</Button>
                </div>
            </div>
            
            <p>inky</p>
        </div> */}

      <div className="contentContainer">
        <div className="topBarContainer">
          <div className="toolbar">
            <Toolbar handleToggleOverview={handleToggleOverview} />
          </div>
          <div className="exitAndSubmit">
            <ExitButton size="large" onClick={() => console.log(showOverview)}>
              Exit
            </ExitButton>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </div>
        <div className="whiteBox">
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
          <div>
            {/* 
          <DragAndDrop sentence={sentence} options={options} /> */}
              <div className={showOverview ? "grayContainer visible" : "grayContainer"}>
              <Overview
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                selectedOptionIndices={selectedOptionIndices}
                handleToggleOverview={handleToggleOverview}
              />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
