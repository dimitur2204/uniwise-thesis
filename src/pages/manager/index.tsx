import { Card, Tab, Tabs } from '@mui/material';
import { Title } from './components/Title';
import { useState } from 'react';
import { TabPanel } from './components/TabPanel';
import { Basic } from './components/tabs/Basic';
import { Assignments } from './components/tabs/Assignments';
import { Associates } from './components/tabs/Associates';
import flowLock from '../../assets/flow-type.svg';
import { Participants } from './components/Participants';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { WfPageTitleRoot } from '@uniwise/flow-ui-react';
import { Rooms } from './components/tabs/Rooms';
import { Sources } from './components/tabs/Sources';
import { Combine } from './components/tabs/Combine';
import { Advanced } from './components/tabs/Advanced';
import { useTranslation } from 'react-i18next';
export enum ActiveTab {
  BASIC,
  HAND_OUT,
  ASSOCIATES,
  ROOMS,
  SOURCES,
  COMBINE,
  ADVANCED,
}

function a11yProps(value: ActiveTab) {
  return {
    id: `simple-tab-${value}`,
    'aria-controls': `simple-tabpanel-${value}`,
    value,
  };
}

export const Manager = () => {
  const [activeTab, setActiveTab] = useState(ActiveTab.BASIC);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <WfPageTitleRoot licenseName={''} />
      <Container>
        <Title
          title={t('index.header.title')}
          description={t('index.header.description')}
          icon={flowLock}
          sx={{
            mt: 2,
          }}
        />
        <Card variant="outlined" sx={{ mt: 2 }}>
          <Tabs
            value={activeTab}
            onChange={(e, v) => {
              setActiveTab(v);
            }}
            aria-label="basic tabs example"
            sx={{
              backgroundColor: 'background.paper',
              borderBottomWidth: 1,
            }}
          >
            <Tab label={t('index.tab.title.basic')} {...a11yProps(ActiveTab.BASIC)} />
            <Tab label={t('index.tab.title.hand-out')} {...a11yProps(ActiveTab.HAND_OUT)} />
            <Tab label={t('index.tab.title.associates')} {...a11yProps(ActiveTab.ASSOCIATES)} />
            <Tab label={t('index.tab.title.rooms')} {...a11yProps(ActiveTab.ROOMS)} />
            <Tab label={t('index.tab.title.sources')} {...a11yProps(ActiveTab.SOURCES)} />
            <Tab label={t('index.tab.title.combine')} {...a11yProps(ActiveTab.COMBINE)} />
            <Tab label={t('index.tab.title.advanced')} {...a11yProps(ActiveTab.ADVANCED)} />
          </Tabs>
        </Card>
        <TabPanel value={ActiveTab.BASIC} activeTab={activeTab}>
          <Basic />
        </TabPanel>
        <TabPanel value={ActiveTab.HAND_OUT} activeTab={activeTab}>
          <Assignments />
        </TabPanel>
        <TabPanel value={ActiveTab.ASSOCIATES} activeTab={activeTab}>
          <Associates />
        </TabPanel>
        <TabPanel value={ActiveTab.ROOMS} activeTab={activeTab}>
          <Rooms />
        </TabPanel>
        <TabPanel value={ActiveTab.SOURCES} activeTab={activeTab}>
          <Sources />
        </TabPanel>
        <TabPanel value={ActiveTab.COMBINE} activeTab={activeTab}>
          <Combine />
        </TabPanel>
        <TabPanel value={ActiveTab.ADVANCED} activeTab={activeTab}>
          <Advanced />
        </TabPanel>
        <Participants />
      </Container>
    </>
  );
};
