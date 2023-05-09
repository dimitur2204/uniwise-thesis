import './App.css'
import { Button, Chip, MenuItem, Select, Tab, Tabs, TextField, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import {MainHeader, SelectedRole, WfPageTitleRoot} from '@uniwise/flow-ui-react'
import { get } from '@uniwise/jwt';


function App() {
  const labelBundle = {
    admin: "Admin",
    adminLoginWarning: "You are logged as admin",
    assessor: "Assessor",
    author: "Author",
    create: "Create",
    editProfile: "Edit profile",
    invigilator: "Invigilator",
    logOff: "Log off",
    logOffAdmin: "Log off admin",
    manager: "Manager",
    newFlow:  "New flow",
    newFlowCombined:  "New flow",
    newFlowSeries: "New flow series",
    participant: "Participant",
    reviewer: "Reviewer",
    support: "Support",
    supporter: "Supporter",
    supportLinkText: "Contact support",
    wiseflowLogoLinkText: "WiseFlow",
  };
  return (
    <ThemeProvider theme={theme}>
            <WfPageTitleRoot licenseName={''} />

      <MainHeader labelBundle={labelBundle}
      JWT={get()}
      selectedRole={SelectedRole.ADMIN}/>
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: 200
    }} className="App">
      <Button variant="contained" color="primary">Hello World</Button>
      <Tabs value={1}  aria-label="basic tabs example">
      <Tab label="Item One"  />
      <Tab label="Item Two" />
      <Tab label="Item Three"/>
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
          variant='standard'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
    </ThemeProvider>

  )
}

export default App
