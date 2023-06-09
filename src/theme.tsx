import { createTheme } from '@mui/material/styles';
import { green, common, grey } from '@mui/material/colors';

export const MAIN_GREEN = '#517709';
export const CARD_BORDER = 'rgba(0, 0, 0, 0.12)';
export const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_GREEN,
      light: green[200],
      dark: green[600],
    },
    secondary: {
      main: grey[200],
    },
  },
  typography: {
    fontFamily: 'Signika, sans-serif',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: common.white,
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '20px',
          textTransform: 'none',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
          borderRadius: '4px',
          padding: '6px 12px',
          '&:hover': {
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
          },
        },
        containedSecondary: {
          color: grey[700],
          backgroundColor: common.white,
          '&:hover': {
            backgroundColor: grey[100],
          },
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: grey[300],
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: grey[400],
          color: common.black,
          borderRadius: '0px 10px 10px 10px',
          height: '24px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        colorSecondary: {
          color: grey[200],
          '&:before': {
            borderBottomColor: grey[200],
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: grey[200],
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          color: grey[700],
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: '55px',
        },
      },
    },
  },
});
