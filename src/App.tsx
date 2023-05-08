import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AssignmentPage from './assignment/AssignmentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AssignmentPage></AssignmentPage>
    </div>
  )
}

export default App
