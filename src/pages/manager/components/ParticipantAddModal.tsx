import { Add, Check, Close, ExpandMore, GroupAdd } from '@mui/icons-material';
import {
  Box,
  ModalProps,
  Typography,
  Modal,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import participants from '../../../assets/participants.json';
import { theme } from '../../../theme';
import { useState } from 'react';

export const ParticipantAddModal: React.FC<Omit<ModalProps, 'children'>> = (props) => {
  const [open, setOpen] = useState(props.open);
  return (
    <Modal
      aria-labelledby="participant-modal-title"
      aria-describedby="participant-modal-description"
      {...props}
      open={open}
    >
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box mb={2}>
          <Typography id="participant-modal-title" variant="h5" component="h2">
            Add participant
          </Typography>
          <Typography id="participant-modal-description" variant="body2">
            You can choose to bulk or individually add participants.
          </Typography>
        </Box>

        <Accordion variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="single-add-content"
            id="single-add-header"
          >
            <Add sx={{ mr: 2 }} />
            <Typography>Add participants one by one</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Autocomplete
              multiple
              id="tags-standard"
              options={participants}
              getOptionLabel={(p) => p?.name ?? ''}
              renderOption={(props, participant) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <strong
                    style={{
                      marginRight: theme.spacing(1),
                    }}
                  >
                    {participant.id}
                  </strong>{' '}
                  {participant.name} {participant.submitted}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Multiple values"
                  placeholder="Favorites"
                />
              )}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="bulk-add-content"
            id="bulk-add-header"
          >
            <GroupAdd sx={{ mr: 2 }} />
            <Typography>Bulk add </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" mb={1}>
              Paste a list with user IDs separated by spaces, commas or semicolons.
            </Typography>
            <Typography variant="body2" mb={1}>
              The following IDs can be used: <strong>Email, UnicId, GenericOrgId</strong>
            </Typography>
            <TextField multiline fullWidth rows={10} label="Participant IDs" />
          </AccordionDetails>
        </Accordion>
        <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
          <Button variant="contained" color="error" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
            Add selected
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
