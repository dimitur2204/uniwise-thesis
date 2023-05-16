import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/landing';
import { Manager } from './pages/manager';
import { Root } from './components/Root';
import AssignmentPage from './pages/lockdownAssignment';
import { LockdownPassword } from './pages/lockdownPassword/index';
import { LockdownExit } from './pages/lockdownExit';
import { LockdownSubmitExit } from './pages/lockdownSubmitExit';
import { ExternalPageModalProvider } from './components/ExternalPageModal';

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

function App() {
  return (
    <ExternalPageModalProvider>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </ExternalPageModalProvider>
  );
}

export default App;
