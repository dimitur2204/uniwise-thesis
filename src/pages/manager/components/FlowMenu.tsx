import React from 'react';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CopyAll, Delete, MenuOutlined, Publish, ReplayOutlined } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';
import { CARD_BORDER } from '../../../theme';
import { useTranslation } from 'react-i18next';

export default function FlowMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
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
          <ListItemText>{t('index.action.remarking')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <ReplayOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('index.action.reset')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <CopyAll fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('index.action.create-copy')}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('common.delete')}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
