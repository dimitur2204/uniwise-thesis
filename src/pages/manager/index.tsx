import { Button, Card, Chip, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material';

export const Manager = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
      }}
      className="App"
    >
      <Button variant="contained" color="primary">
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
      </Select>
    </div>
  );
};
