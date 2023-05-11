import { Button, ButtonGroup, Card, Stack, Typography } from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import participants from '../../../assets/participants.json';

const rows: GridRowsProp = participants.map((p) => ({
  id: p.id,
  name: p.name,
  ects: p.ects,
  gradingScale: p.gradingScale,
  start: p.start,
  end: p.end,
}));

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 150,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'ects',
    headerName: 'ECTS',
    width: 150,
  },
  {
    field: 'gradingScale',
    headerName: 'Grading Scale',
    width: 150,
  },
  {
    field: 'start',
    headerName: 'Start',
    width: 150,
  },
  {
    field: 'end',
    headerName: 'End',
    width: 150,
  },
];
export const Participants: React.FC = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        mt: 2,
      }}
    >
      <Stack gap={2}>
        <Stack>
          <Typography component="h1" variant="h4">
            Participants
          </Typography>
          <Typography variant="body2">All participant related actions</Typography>
        </Stack>
        <ButtonGroup>
          <Button variant="contained" color="secondary">
            Add participants
          </Button>
          <Button variant="contained" color="secondary">
            Manage groups
          </Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
};
