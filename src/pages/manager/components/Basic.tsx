import { Card, Unstable_Grid2 as Grid2, Select, Stack, TextField, Typography } from '@mui/material';
import { ActionCard } from './ActionCard';
import flowLockIcon from '../../../assets/flow-type.svg';
import { CARD_BORDER } from '../../../theme';

export const Basic = () => {
  return (
    <Grid2 container gap={3} padding={3} component={Card} variant="outlined">
      <Grid2 xs={12} md={6}>
        <ActionCard
          title="Basic information"
          contentSx={{
            padding: 0,
          }}
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
              <TextField fullWidth variant="standard" label="Subtitle" />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField fullWidth variant="standard" label="Term" />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Select fullWidth variant="outlined" size="small" />
            </Grid2>
            <Grid2 xs={12} md={6}>
              <TextField fullWidth variant="standard" label="Term" />
            </Grid2>
          </Grid2>
        </ActionCard>
      </Grid2>
    </Grid2>
  );
};
