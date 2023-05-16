import { Box, Modal, Typography } from '@mui/material';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            External page
          </Typography>
          <Typography>This button leads to an external page inside of WISEflow.</Typography>
        </Box>
      </Modal>
      {children}
    </ExternalPageModalContext.Provider>
  );
};
