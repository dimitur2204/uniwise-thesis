import React, { useEffect, useState, useRef } from 'react';
import { IconButton } from '@mui/material';
import { ToolbarIcon } from '../Toolbar/Toolbar';
import Notes from '../../../../assets/images/notes.png';
import Collapse from '../../../../assets/images/reduce.png';
import Expand from '../../../../assets/images/Expand.png';
import Unexpand from '../../../../assets/images/unexpand.png';
import Close from '../../../../assets/images/close.png';
import Plus from '../../../../assets/images/plus.png';
import './Notepad.css';
import { Tooltip } from '@uniwise/flow-ui-react';

interface NotepadProps {
  className: string;
}

const Notepad: React.FC<NotepadProps> = ({ className }) => {
  const [isOpen, setIsOpened] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const notepadRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [notepadPosition, setNotepadPosition] = useState({ top: '50%', left: '50%' });

  /* handle the mouse movement*/
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && notepadRef.current) {
        const x = e.clientX - dragOffset.x;
        const y = e.clientY - dragOffset.y;
        notepadRef.current.style.left = x + 'px';
        notepadRef.current.style.top = y + 'px';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isDragging, dragOffset]);

  /* handles the mouse drag on start event*/
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const offset = {
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop,
    };
    setDragOffset(offset);
  };

   /* puts the draging state to false*/
  const onDragEnd = () => {
    setIsDragging(false);
  };

  /* toggles the open state of the notepad*/
  const toggleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  /* toggles the expanded state of the notepad*/
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  /* toggles the fullscreen state of the notepad*/
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  
    if (!isFullScreen && isDragging && notepadRef.current) {
      // Calculate the new position when entering fullscreen
      const notepadRect = notepadRef.current.getBoundingClientRect();
      const x = (window.innerWidth - notepadRect.width) / 2;
      const y = (window.innerHeight - notepadRect.height) / 2;
  
      setNotepadPosition({ top: `${y}px`, left: `${x}px` });
    }
  };
  
/* handle text chagne in the textbox*/
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  /*character count*/
  const characterCount = text.length;
  const isMaxCharacters = characterCount >= 1000;

  return (
    <>
      <div onClick={toggleOpen}>
        <Tooltip text="Notepad">
          <ToolbarIcon className={className}>
            <img src={Notes} alt="notes" />
          </ToolbarIcon>
        </Tooltip>
      </div>
      <div
        className={`notepad ${isOpen ? '' : 'hidden'} ${isFullScreen ? 'fullscreen' : ''}${
          isExpanded ? 'collapsed' : ''
        }`}
        ref={notepadRef}
        style={isFullScreen ? notepadPosition : {}}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
      >
        <div className="notepad-topbar">
          <div className="notepad-icon-label">
            <img className="notepad-icon-label-first" src={Notes} alt="notes" />
            <span className="notepad-label">Notepad</span>
          </div>
          <div className="notepad-buttons">
            <IconButton onClick={toggleExpanded}>
              {isExpanded ? <img src={Plus} alt="plus" /> : <img src={Collapse} alt="collapse" />}
            </IconButton>
            <IconButton
              className="notepad-button"
              onClick={toggleFullScreen}
              title={`${isFullScreen ? 'Exit Full Screen' : 'Full Screen'}`}
            >
              {isFullScreen ? (
                <img src={Unexpand} alt="unexpand" />
              ) : (
                <img src={Expand} alt="unexpand" />
              )}
            </IconButton>
            <IconButton className="notepad-button" onClick={toggleOpen} title="Close Notepad">
              <img src={Close} alt="close" />
            </IconButton>
          </div>
        </div>
        <div className={`notepad-body ${isExpanded ? 'collapsed' : ''}`}>
          <textarea
            className="notepad-textarea"
            value={text}
            onChange={handleTextChange}
            maxLength={1000}
          />
          <div className={`notepad-character-count ${isMaxCharacters ? 'max-characters' : ''}`}>
            {characterCount}/1000
          </div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
