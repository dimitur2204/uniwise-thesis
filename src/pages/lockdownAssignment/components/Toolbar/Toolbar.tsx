import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Tooltip } from '@uniwise/flow-ui-react';
import Flag from '../../../../assets/images/flag.png';
import FlagGreen from '../../../../assets/images/flagGreen.png';
import Overview from '../../../../assets/images/overview.png';
import Write from '../../../../assets/images/write.png';
import WriteHide from '../../../../assets/images/hideWrite.png';
import StickyNote from '../StickyNote/StickyNote';
import Notepad from '../Notepad/Notepad';

interface Props {
  handleToggleOverview: () => void;
  handleWriteOpen: () => void;
  handleShowDrawings: () => void;
  handleFlag: () => void;
  isFlagged: boolean | null;
}

export const ToolbarIcon = styled(Button)({
  padding: '0px',
  height: '50px',
  borderRadius: '0px',
  border: 'none',
  '&:hover': {
    backgroundColor: '#8D8D8D',
    borderRadius: '0px',
  },
  '&:active': {
    backgroundColor: '#8D8D8D',
    borderRadius: '0px',
  },
});

export const Toolbar: React.FC<Props> = ({
  handleToggleOverview,
  handleFlag,
  isFlagged,
  handleWriteOpen,
  handleShowDrawings,
}) => {
  return (
    <>
      <Tooltip text={'Flag'}>
        <ToolbarIcon className="toolbarIcon" onClick={handleFlag} aria-label="Flag">
          {isFlagged ? (
            <img src={FlagGreen} alt="flagGreen" />
          ) : (
            <img src={Flag} alt="flaflaggGreen" />
          )}
        </ToolbarIcon>
      </Tooltip>
      <Tooltip text={'Overview'}>
        <ToolbarIcon className="toolbarIcon" onClick={handleToggleOverview} aria-label="Overview">
          <img src={Overview} alt="overview" />
        </ToolbarIcon>
      </Tooltip>
      <Notepad className="toolbarIcon" />
      <StickyNote className="toolbarIcon" />
      <Tooltip text={'Write/Draw'}>
        <ToolbarIcon className="toolbarIcon" aria-label="Write/Draw" onClick={handleWriteOpen}>
          <img src={Write} alt="WriteHide" />
        </ToolbarIcon>
      </Tooltip>
      <Tooltip text={'Hide Write/Draw'}>
        <ToolbarIcon className="toolbarIcon" aria-label="Hide write/draw" onClick={handleShowDrawings}>
          <img src={WriteHide} alt="WriteHide" />
        </ToolbarIcon>
      </Tooltip>
    </>
  );
};
