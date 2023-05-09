import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/main.css'
import '@fontsource/signika/300.css';
import '@fontsource/signika/400.css';
import '@fontsource/signika/500.css';
import '@fontsource/signika/700.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
