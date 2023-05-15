import React from 'react';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CopyAll, Delete, MenuOutlined, Publish, ReplayOutlined } from '@mui/icons-material';
import { Button, IconButton, Menu } from '@mui/material';
import { CARD_BORDER } from '../../../theme';

export default function FlowMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-label="Flow menu"
        onClick={handleClick}
        sx={{
          border: `2px solid ${CARD_BORDER}`,
        }}
      >
        <MenuOutlined />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Publish fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create a remarking flow</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <ReplayOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Reset grades</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <CopyAll fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create a copy of the flow</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
