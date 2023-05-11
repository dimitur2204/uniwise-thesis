import {
  Box,
  Tab,
  Tabs,
  styled,
  TextField,
  Autocomplete,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material';
import logoWhite from '../assets/logo-white.svg';
import { common, grey } from '@mui/material/colors';
import { Container } from './Container';
import { useState } from 'react';
import { LanguageSelect } from './LanguageSelect';
import { Create, HdrPlus, Menu, PlusOne } from '@mui/icons-material';
const HeaderTab = styled(Tab)(() => ({
  textTransform: 'none',
  color: common.white,
  "&[aria-selected='true']": {
    color: common.white,
    backgroundColor: grey[900],
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
}));

const HeaderTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: common.white,
  },
}));

export const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Box
      sx={{
        backgroundColor: grey[800],
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <img src={logoWhite} alt="logo" />
          <LanguageSelect />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <HeaderTabs
            sx={{
              color: common.white,
            }}
            onChange={(e, value) => setActiveTab(value)}
            value={activeTab}
          >
            <HeaderTab label="Participation" />
            <HeaderTab label="Invigilation" />
            <HeaderTab label="Authoring" />
            <HeaderTab label="Reviewing" />
            <HeaderTab label="Managing" />
            <HeaderTab label="Support" />
            <HeaderTab label="License administration" />
          </HeaderTabs>
          <ButtonGroup size="small" variant="contained" color="secondary">
            <Button size="small" startIcon={<Create />}>
              Create
            </Button>
            <Button size="small" startIcon={<Menu />}>
              Combine
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};
