import './App.css'
import { Button, Chip, Tab, Tabs, ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Button variant="contained" color="primary">Hello World</Button>
    <Tabs value={1}  aria-label="basic tabs example">
    <Tab label="Item One"  />
    <Tab label="Item Two" />
    <Tab label="Item Three"/>
  </Tabs>
  <Chip label="Basic Chip" />
    </div>
    </ThemeProvider>

  )
}

export default App
