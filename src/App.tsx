import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/landing';
import { Manager } from './pages/manager';
import { Root } from './components/Root';
import AssignmentPage from './pages/lockdownAssignment';

const router = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
