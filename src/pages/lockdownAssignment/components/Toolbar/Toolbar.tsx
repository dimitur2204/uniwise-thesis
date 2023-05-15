import { IconButton } from '@mui/material';
import Flag from '../../../../assets/images/flag.png';
import FlagGreen from '../../../../assets/images/flagGreen.png';
import Overview from '../../../../assets/images/overview.png';
import Notes from '../../../../assets/images/notes.png';
import Write from '../../../../assets/images/write.png';
import WriteHide from '../../../../assets/images/hideWrite.png';
import styled from '@emotion/styled';

import React, { useState } from 'react';
import StickyNote from '../StickyNote/StickyNote';
import Notepad from '../Notepad/Notepad';

interface Props {
  handleToggleOverview: () => void;
  handleFlag: () => void;
  isFlagged: boolean | null;
}

export const ToolbarIcon = styled(IconButton)({
  '&:hover': {
    backgroundColor: '#8D8D8D',
    borderRadius: '0px',
  },
  '&:active': {
    backgroundColor: '#8D8D8D',
    borderRadius: '0px',
  },
});

export const Toolbar: React.FC<Props> = ({ handleToggleOverview, handleFlag, isFlagged }) => {
  return (
    <>
      <ToolbarIcon className="toolbarIcon" onClick={handleFlag}>{isFlagged ? <img src={FlagGreen} alt="flagGreen" /> : <img src={Flag} alt="flaflaggGreen" />}</ToolbarIcon>
      <ToolbarIcon className="toolbarIcon" onClick={handleToggleOverview}>
        <img src={Overview} alt="overview" />
      </ToolbarIcon>
      <Notepad className="toolbarIcon" />
      <StickyNote className="toolbarIcon" />
      <ToolbarIcon className="toolbarIcon">
        <img src={Write} alt="WriteHide" />
      </ToolbarIcon>
      <ToolbarIcon className="toolbarIcon">
        <img src={WriteHide} alt="WriteHide" />
      </ToolbarIcon>
    </>
  );
};
