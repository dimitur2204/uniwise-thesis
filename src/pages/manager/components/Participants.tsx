import { Button, ButtonGroup, Card, Stack, Tab, Tabs, Typography } from '@mui/material';
import { GridRowsProp, GridColDef, DataGrid, daDK, enUS } from '@mui/x-data-grid';
import participants from '../../../assets/participants.json';
import { Add, Check, Details, Group, Info, Menu, MenuBook, Monitor } from '@mui/icons-material';
import { useState } from 'react';
import { theme } from '../../../theme';
import { ParticipantAddModal } from './ParticipantAddModal';
import { useTranslation } from 'react-i18next';

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

const PARTICIPANT_I18N_KEY = 'index.participants';
const participantTrans = (key: string) => {
  return `${PARTICIPANT_I18N_KEY}.${key}`;
};

export const Participants: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openParticipantModal, setOpenParticipantModal] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 5,
        mt: 2,
      }}
    >
      <Stack gap={2} width="100%">
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Stack>
            <Typography component="h1" variant="h4">
              {t(participantTrans('title'))}
            </Typography>
            <Typography variant="body2">{t(participantTrans('description'))}</Typography>
          </Stack>
          <ButtonGroup>
            <Button startIcon={<Monitor />} variant="contained" color="secondary">
              {t(participantTrans('actions.participation-monitor'))}
            </Button>
            <Button startIcon={<Menu />} variant="contained" color="secondary">
              {t(participantTrans('actions.tools'))}
            </Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" gap={2}>
          <Button
            startIcon={<Add />}
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenParticipantModal(true);
            }}
          >
            {t('common.add')} {t('common.participants')}
          </Button>
          <Button startIcon={<Group />} variant="contained" color="primary">
            {t(participantTrans('actions.manage-groups'))}
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
          <Tab
            icon={<Info />}
            iconPosition="start"
            label={t(participantTrans('tabs.basic-info'))}
          />
          <Tab
            icon={<MenuBook />}
            iconPosition="start"
            label={t(participantTrans('tabs.participant-details'))}
          />
          <Tab
            icon={<Check />}
            iconPosition="start"
            label={t(participantTrans('tabs.final-grade'))}
          />
        </Tabs>
        <DataGrid
          rows={rows}
          columns={columns}
          localeText={
            i18n.language === 'dk'
              ? daDK.components.MuiDataGrid.defaultProps.localeText
              : enUS.components.MuiDataGrid.defaultProps.localeText
          }
        />
        <ParticipantAddModal
          open={openParticipantModal}
          onClose={() => {
            setOpenParticipantModal(false);
          }}
        />
      </Stack>
    </Card>
  );
};
