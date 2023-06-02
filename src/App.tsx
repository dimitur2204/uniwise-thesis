import './App.css';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { darkTheme, theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/landing';
import { Manager } from './pages/manager';
import { Root } from './components/Root';
import AssignmentPage from './pages/lockdownAssignment';
import { LockdownPassword } from './pages/lockdownPassword/index';
import { LockdownExit } from './pages/lockdownExit';
import { LockdownSubmitExit } from './pages/lockdownSubmitExit';
import { ExternalPageModalProvider } from './components/ExternalPageModal';
import React from 'react';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/page',
      element: <Root />,
      children: [
        {
          path: 'manager',
          element: <Manager />,
        },
        {
          path: 'lockdown',
          element: <AssignmentPage />,
        },
        {
          path: 'lockdownPassword',
          element: <LockdownPassword />,
        },
        {
          path: 'lockdownExit',
          element: <LockdownExit />,
        },
        {
          path: 'lockdownSubmitExit',
          element: <LockdownSubmitExit />,
        },
      ],
    },
  ],
  {
    basename: '/uniwise-thesis',
  },
);

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
} | null>(null);

function App() {
  const [_theme, setTheme] = React.useState<Theme>(theme);
  return (
    <ExternalPageModalProvider>
      <ThemeContext.Provider value={{ theme: _theme, setTheme }}>
        <ThemeProvider theme={_theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <RouterProvider router={router} />
          </LocalizationProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ExternalPageModalProvider>
  );
}

export default App;
