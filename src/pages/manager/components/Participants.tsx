import { Button, ButtonGroup, Card, Stack, Tab, Tabs, Typography } from '@mui/material';
import { GridRowsProp, GridColDef, DataGrid } from '@mui/x-data-grid';
import participants from '../../../assets/participants.json';
import { Add, Check, Details, Group, Info, Menu, MenuBook, Monitor } from '@mui/icons-material';
import { useState } from 'react';
import { theme } from '../../../theme';

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
  },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'ects',
    headerName: 'ECTS',
  },
  {
    field: 'gradingScale',
    headerName: 'Grading Scale',
    width: 200,
  },
  {
    field: 'start',
    headerName: 'Start',
    width: 200,
  },
  {
    field: 'end',
    headerName: 'End',
    width: 200,
  },
];
export const Participants: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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
      <Stack gap={2} width="100%">
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Stack>
            <Typography component="h1" variant="h4">
              Participants
            </Typography>
            <Typography variant="body2">All participant related actions</Typography>
          </Stack>
          <ButtonGroup>
            <Button startIcon={<Monitor />} variant="contained" color="secondary">
              Participation monitor
            </Button>
            <Button startIcon={<Menu />} variant="contained" color="secondary">
              Tools
            </Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" gap={2}>
          <Button startIcon={<Add />} variant="contained" color="primary">
            Add participants
          </Button>
          <Button startIcon={<Group />} variant="contained" color="primary">
            Manage groups
          </Button>
        </Stack>
        <Tabs
          value={activeTab}
          onChange={(e, v) => {
            setActiveTab(v);
          }}
          sx={{
            marginBottom: `-${theme.spacing(2)}`,
          }}
        >
          <Tab icon={<Info />} iconPosition="start" label="Basic information" />
          <Tab icon={<MenuBook />} iconPosition="start" label="Participant details" />
          <Tab icon={<Check />} iconPosition="start" label="Final grade" />
        </Tabs>
        <DataGrid rows={rows} columns={columns} />
      </Stack>
    </Card>
  );
};
