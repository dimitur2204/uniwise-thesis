import { createTheme } from '@mui/material/styles';
import { green,common } from '@mui/material/colors';

const MAIN_GREEN = "#517709"
export const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_GREEN,
      light: green[200],
        dark: green[600],
    },
    secondary: {
      main: green[500],
    },
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
                fontWeight: 400,
                textTransform: 'none',
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
                borderRadius: "4px",
                padding: "6px 12px",
                '&:hover': {
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
                },
            }
        }
      }
  }
});
