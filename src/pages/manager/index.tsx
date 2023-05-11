import { Button, Card, Chip, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material';

export const Manager = () => {
  return (
<<<<<<< Updated upstream
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
      }}
      className="App"
    >
      <Button variant="contained" color="primary">
=======
    <div>
      {/* <Button variant="contained" color="primary">
>>>>>>> Stashed changes
        Hello World
      </Button>
      <Tabs value={1} aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
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
<<<<<<< Updated upstream
      </Select>
=======
      </Select> */}
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
      <TabPanel value={ActiveTab.HAND_OUT} activeTab={activeTab}></TabPanel>
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
>>>>>>> Stashed changes
    </div>
  );
};
