import {
  Card,
  Unstable_Grid2 as Grid2,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { ActionCard } from './ActionCard';
import flowLockIcon from '../../../assets/flow-type.svg';
import { CARD_BORDER } from '../../../theme';
import { useState } from 'react';

const BasicBox = () => {
  const [exType, setExType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [enabled, setEnabled] = useState(false);
  return (
    <ActionCard
      title="Basic information"
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
    >
      <Stack borderBottom={`1px solid ${CARD_BORDER}`} padding={2} direction="row" gap={3}>
        <Stack alignItems="center" justifyContent="center">
          <img src={flowLockIcon} alt="Flow lock" />
          <Typography variant="body1" component="p">
            FLOWLock
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" component="h4">
            Flow code: AKH0000001076
          </Typography>
          <Typography variant="body2" component="p">
            Flow code: AKH0000001076
          </Typography>
          <Typography variant="body2" component="p">
            Flow ID: 1076
          </Typography>
        </Stack>
      </Stack>
      <Grid2 container spacing={5} padding={2}>
        <Grid2 xs={12} md={6}>
          <TextField disabled={!enabled} fullWidth variant="standard" label="Subtitle" />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField disabled={!enabled} fullWidth variant="standard" label="Term" />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            disabled={!enabled}
            select
            value={exType}
            onChange={(e) => {
              setExType(e.target.value as string);
            }}
            fullWidth
            variant="outlined"
            size="small"
            label="Examination type"
          >
            <MenuItem value="ord-ex">Ordinary examination</MenuItem>
          </TextField>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            disabled={!enabled}
            select
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value as string);
            }}
            fullWidth
            variant="outlined"
            size="small"
            label="Purpose"
          >
            <MenuItem value="ex">Examination</MenuItem>
          </TextField>
        </Grid2>
      </Grid2>
    </ActionCard>
  );
};

const DeadlinesBox = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <ActionCard
      title="Deadlines"
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
    >
      <Stack borderBottom={`1px solid ${CARD_BORDER}`} padding={2} direction="row" gap={3}>
        <Stack>
          <Typography variant="h6" component="h4">
            Participation and marking deadlines
          </Typography>
          <Typography variant="body2" component="p">
            In this section you set the deadlines for the participation and assessment periods
          </Typography>
        </Stack>
      </Stack>
      <Grid2 container spacing={5} padding={2}>
        <Grid2 xs={12} md={6}>
          <DateTimePicker
            disabled={!enabled}
            label="Participation start"
            slotProps={{
              textField: {
                variant: 'standard',
                fullWidth: true,
              },
            }}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <DateTimePicker
            disabled={!enabled}
            label="Participation end"
            slotProps={{
              textField: {
                variant: 'standard',
                fullWidth: true,
              },
            }}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <DateTimePicker
            disabled={!enabled}
            label="Marking start"
            slotProps={{
              textField: {
                variant: 'standard',
                fullWidth: true,
              },
            }}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <DateTimePicker
            disabled={!enabled}
            label="Marking end"
            slotProps={{
              textField: {
                variant: 'standard',
                fullWidth: true,
              },
            }}
          />
        </Grid2>
      </Grid2>
    </ActionCard>
  );
};

const DetailsBox = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <ActionCard
      title="Details"
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
    >
      <Grid2 container spacing={4} columnSpacing={2} padding={2}>
        <Grid2 xs={12}>
          <TextField
            disabled={!enabled}
            select
            fullWidth
            variant="outlined"
            size="small"
            label="Anonymous participants"
          >
            <MenuItem value="ord-ex">Participant index</MenuItem>
          </TextField>
        </Grid2>
        <Grid2 xs={6} display="flex" gap={1}>
          <Switch disabled={!enabled} />
          <Stack>
            <Typography variant="subtitle1" component="p">
              Anonymous internal assessors
            </Typography>
            <Typography variant="body2" component="p">
              Makes the internal assessor invisible to students
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 xs={6} display="flex" gap={1}>
          <Switch disabled={!enabled} />
          <Stack>
            <Typography variant="subtitle1" component="p">
              Individual assignments
            </Typography>
            <Typography variant="body2" component="p">
              Assignments are individual here which means that each student gets their own
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            disabled={!enabled}
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            label="ECTS"
            inputProps={{
              min: 0,
              max: 120,
            }}
          ></TextField>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Grid2 xs={12}>
            <TextField
              disabled={!enabled}
              select
              fullWidth
              variant="outlined"
              size="small"
              label="Grading scale"
            >
              <MenuItem value={1}>Passed/Not passed</MenuItem>
              <MenuItem value={2}>7 Scale Danish</MenuItem>
              <MenuItem value={3}>6 Scale Bulgarian</MenuItem>
            </TextField>
          </Grid2>
        </Grid2>
      </Grid2>
    </ActionCard>
  );
};

export const Basic = () => {
  return (
    <Grid2
      container
      spacing={3}
      margin={0}
      wrap="wrap"
      padding={3}
      component={Card}
      variant="outlined"
    >
      <Grid2 xs={12} md={6}>
        <BasicBox />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <DeadlinesBox />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <DetailsBox />
      </Grid2>
    </Grid2>
  );
};
