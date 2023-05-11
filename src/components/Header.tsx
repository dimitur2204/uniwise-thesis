import { Box, Tab, Tabs, styled, Stack, ButtonGroup, Button, IconButton } from '@mui/material';
import logoWhite from '../assets/logo-white.svg';
import { common, grey } from '@mui/material/colors';
import { Container } from './Container';
import { useState } from 'react';
import { LanguageSelect } from './LanguageSelect';
import { Create, Menu } from '@mui/icons-material';
import AuthoringIcon from '../assets/authoring-icon.svg';
import InvigilationIcon from '../assets/invigilator icon.svg';
import ParticipationIcon from '../assets/participation-icon.svg';
import ReviewingIcon from '../assets/reviewing-icon.svg';
import MarkingIcon from '../assets/marking-icon.svg';
import SupportIcon from '../assets/support-icon.svg';
import LicenseAdminIcon from '../assets/license-admin-icon.svg';
import ManagingIcon from '../assets/managing-icon.svg';

import { theme } from '../theme';
const HeaderTab = styled(Tab)(() => ({
  textTransform: 'none',
  color: common.white,
  "&[aria-selected='true']": {
    color: common.white,
    backgroundColor: grey[900],
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  minHeight: 45,
}));

const HeaderTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: common.white,
  },
}));

export const Header = () => {
  const [activeTab, setActiveTab] = useState(5);
  return (
    <Box
      sx={{
        backgroundColor: grey[800],
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2),
          pt: 2,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <img src={logoWhite} alt="logo" />
          <LanguageSelect />
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <HeaderTabs
            sx={{
              color: common.white,
            }}
            onChange={(e, value) => setActiveTab(value)}
            value={activeTab}
            variant="scrollable"
          >
            <HeaderTab
              label="Participation"
              icon={<img width={20} height={20} src={ParticipationIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Invigilation"
              icon={<img width={20} height={20} src={InvigilationIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Authoring"
              icon={<img width={20} height={20} src={AuthoringIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Marking"
              icon={<img width={20} height={20} src={MarkingIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Reviewing"
              icon={<img width={20} height={20} src={ReviewingIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Managing"
              icon={<img width={20} height={20} src={ManagingIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="Support"
              icon={<img width={20} height={20} src={SupportIcon} />}
              iconPosition="start"
            />
            <HeaderTab
              label="License administration"
              icon={<img width={20} height={20} src={LicenseAdminIcon} />}
              iconPosition="start"
            />
          </HeaderTabs>
          <ButtonGroup>
            <Button variant="contained" color="secondary" startIcon={<Create />}>
              Create
            </Button>
            <Button aria-label="Combine" variant="contained" color="secondary">
              <Menu />
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};
