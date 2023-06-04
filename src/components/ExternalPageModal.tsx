import { Box, Dialog, DialogTitle, Modal, Typography } from '@mui/material';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ThemeContext } from '../App';
import { darkTheme } from '../theme';
import { common, grey } from '@mui/material/colors';

export const ExternalPageModalContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | null;
}>({
  open: false,
  setOpen: null,
});

export const ExternalPageModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ExternalPageModalContext.Provider value={{ open: open, setOpen: setOpen }}>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>External page</DialogTitle>
        <Box
          sx={{
            p: 3,
            pt: 0,
          }}
        >
          <Typography>This button leads to an external page inside of WISEflow.</Typography>
        </Box>
      </Dialog>
      {children}
    </ExternalPageModalContext.Provider>
  );
};
