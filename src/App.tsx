import './App.css'
import { Button, ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Button variant="contained" color="primary">Hello World</Button>
    </div>
    </ThemeProvider>

  )
}

export default App
