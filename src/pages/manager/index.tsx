import { Box, Button, Card, Chip, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material';
import { Title } from './components/Title';
import { useState } from 'react';
import { TabPanel } from './components/TabPanel';
import { Basic } from './components/Basic';

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
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Chip label="Basic Chip" />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="standard"
      />
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Age"
        variant="standard"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Title
        title="Flow Title"
        description="Flow subtitle and what the flow is about here"
        icon="https://via.placeholder.com/60"
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
          <Tab label="Basic" {...a11yProps(ActiveTab.BASIC)} />
          <Tab label="Hand out" {...a11yProps(ActiveTab.HAND_OUT)} />
          <Tab label="Associates" {...a11yProps(ActiveTab.ASSOCIATES)} />
          <Tab label="Rooms" {...a11yProps(ActiveTab.ROOMS)} />
          <Tab label="Sources" {...a11yProps(ActiveTab.SOURCES)} />
          <Tab label="Combine" {...a11yProps(ActiveTab.COMBINE)} />
          <Tab label="Advanced" {...a11yProps(ActiveTab.ADVANCED)} />
        </Tabs>
      </Card>
      <TabPanel value={ActiveTab.BASIC} activeTab={activeTab}>
        <Basic />
      </TabPanel>
      <TabPanel value={ActiveTab.HAND_OUT} activeTab={activeTab}>
        Item Two
      </TabPanel>
      <TabPanel value={ActiveTab.ASSOCIATES} activeTab={activeTab}>
        Item Three
      </TabPanel>
      <TabPanel value={ActiveTab.ROOMS} activeTab={activeTab}>
        Item Four
      </TabPanel>
      <TabPanel value={ActiveTab.SOURCES} activeTab={activeTab}>
        Item Five
      </TabPanel>
      <TabPanel value={ActiveTab.COMBINE} activeTab={activeTab}>
        Item Six
      </TabPanel>
      <TabPanel value={ActiveTab.ADVANCED} activeTab={activeTab}>
        Item Seven
      </TabPanel>
    </div>
  );
};
