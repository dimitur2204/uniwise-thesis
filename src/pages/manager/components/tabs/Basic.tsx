import {
  Box,
  Button,
  Card,
  Chip,
  Unstable_Grid2 as Grid2,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { ActionCard } from '../ActionCard';
import flowLockIcon from '../../../../assets/flow-type.svg';
import { CARD_BORDER } from '../../../../theme';
import { useContext, useState } from 'react';
import { PasswordField } from '../../../../components/PasswordField';
import { ExternalPageModalContext } from '../../../../components/ExternalPageModal';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const BASIC_I18N_KEY = 'index.tab.basic';
const basicTrans = (key: string) => `${BASIC_I18N_KEY}.${key}`;
const BasicBox = () => {
  const [exType, setExType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [enabled, setEnabled] = useState(false);
  const { t } = useTranslation();
  return (
    <ActionCard
      title={t(basicTrans('info.title'))}
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
    >
      <Stack
        borderBottom={`1px solid ${CARD_BORDER}`}
        padding={2}
        paddingY={1.5}
        direction="row"
        gap={3}
      >
        <Stack alignItems="center" justifyContent="center">
          <img src={flowLockIcon} alt="Flow lock" />
          <Typography variant="body1" component="p">
            FLOWLock
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" component="h4">
            {t(basicTrans('info.code'))}: AKH0000001076
          </Typography>
          <Typography variant="body2" component="p">
            {t(basicTrans('info.code'))}: AKH0000001076
          </Typography>
          <Typography variant="body2" component="p">
            {t(basicTrans('info.id'))}: 1076
          </Typography>
        </Stack>
      </Stack>
      <Grid2 container spacing={5} padding={2}>
        <Grid2 xs={12} md={6}>
          <TextField
            disabled={!enabled}
            fullWidth
            variant="standard"
            label={t(basicTrans('info.subtitle'))}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            disabled={!enabled}
            fullWidth
            variant="standard"
            label={t(basicTrans('info.term'))}
          />
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
            label={t(basicTrans('info.examination-type'))}
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
            label={t(basicTrans('info.purpose'))}
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
      title={t(basicTrans('deadlines.title'))}
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
    >
      <Stack borderBottom={`1px solid ${CARD_BORDER}`} padding={2} direction="row" gap={3}>
        <Stack>
          <Typography variant="h6" component="h4">
            {t('common.participation')} {t('common.and')} {t('common.marking')}{' '}
            {t(basicTrans('deadlines.title')).toLowerCase()}
          </Typography>
          <Typography variant="body2" component="p">
            {t(basicTrans('deadlines.description'))}
          </Typography>
        </Stack>
      </Stack>
      <Grid2 container spacing={5} padding={2}>
        <Grid2 xs={12} md={6}>
          <DateTimePicker
            disabled={!enabled}
            label={`${t('common.participation')} ${t('common.start')}`}
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
            label={`${t('common.participation')} ${t('common.end')}`}
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
            label={`${t('common.marking')} ${t('common.start')}`}
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
            label={`${t('common.marking')} ${t('common.end')}`}
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
      title={t(basicTrans('details.title'))}
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
            label={t(basicTrans('details.anonymous-participants'))}
          >
            <MenuItem value="ord-ex">Participant index</MenuItem>
          </TextField>
        </Grid2>
        <Grid2 xs={6} display="flex" gap={1}>
          <Switch disabled={!enabled} />
          <Stack>
            <Typography variant="subtitle1" component="p">
              {t(basicTrans('details.anonymous-assessors.title'))}
            </Typography>
            <Typography variant="body2" component="p">
              {t(basicTrans('details.anonymous-assessors.description'))}
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 xs={6} display="flex" gap={1}>
          <Switch disabled={!enabled} />
          <Stack>
            <Typography variant="subtitle1" component="p">
              {t(basicTrans('details.individual-assignments.title'))}
            </Typography>
            <Typography variant="body2" component="p">
              {t(basicTrans('details.individual-assignments.description'))}
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
              label={t('common.grading-scale')}
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

const MarkingAndReviewBox = () => {
  const { setOpen } = useContext(ExternalPageModalContext);
  return (
    <ActionCard
      title={`${t('common.marking')} ${t('common.and')} ${t('common.reviewing').toLowerCase()}`}
      contentSx={{
        padding: 0,
      }}
      hideButtons
    >
      <Stack
        borderBottom={`1px solid ${CARD_BORDER}`}
        padding={2}
        direction="row"
        gap={3}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Stack gap={0.5}>
          <Typography variant="h6" component="h4">
            {t('common.assessors')}
          </Typography>
          <Stack direction="row" gap={1}>
            <Chip label={`2 ${t('common.internal')} ${t('common.assessors')}`} />
            <Chip label={`1 ${t('common.external')} ${t('common.assessors')}`} />
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            setOpen?.(true);
          }}
          variant="contained"
          color="secondary"
        >
          {t('common.add')} {t('common.assessors').toLowerCase()}
        </Button>
      </Stack>
      <Stack
        borderBottom={`1px solid ${CARD_BORDER}`}
        padding={2}
        paddingY={1.5}
        direction="row"
        gap={3}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Stack gap={0.5}>
          <Typography variant="h6" component="h4">
            {t('common.reviewers')}
          </Typography>
          <Stack direction="row" gap={1}>
            <Chip label={`1 ${t('common.reviewers')}`} />
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            setOpen?.(true);
          }}
          variant="contained"
          color="secondary"
        >
          {t('common.add')} {t('common.reviewers').toLowerCase()}
        </Button>
      </Stack>
      <Stack
        borderBottom={`1px solid ${CARD_BORDER}`}
        padding={2}
        paddingY={1.5}
        direction="row"
        gap={3}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Stack gap={0.5}>
          <Typography variant="h6" component="h4">
            {t('common.rubric', {
              count: 0,
            })}
          </Typography>
          <Stack direction="row" gap={1}>
            <Chip label={`0 ${t('common.rubric', { count: 2 })}`} />
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            setOpen?.(true);
          }}
          variant="contained"
          color="secondary"
          
        >
          {t('common.add')} {t('common.rubric', { count: 2 }).toLowerCase()}
        </Button>
      </Stack>
      <Stack
        gap={3}
        padding={2}
        paddingY={1.5}
        paddingBottom={0}
        direction="row"
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Stack gap={0.5}>
          <Typography variant="h6" component="h4">
            {t('common.additional')}
          </Typography>
          <Typography variant="body2" component="h4">
            {t(basicTrans('marking.additional.description'))}
          </Typography>
        </Stack>
        <Button
          onClick={() => {
            setOpen?.(true);
          }}
          variant="contained"
          color="secondary"
        >
          {t('common.add')} {t('common.additional').toLowerCase()}
        </Button>
      </Stack>
    </ActionCard>
  );
};

const ParticipationBox = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <ActionCard
      title={t(basicTrans('participation.title'))}
      contentSx={{
        padding: 0,
      }}
      onClickEdit={() => setEnabled(true)}
      onClickSave={() => setEnabled(false)}
      sx={{
        minHeight: 0,
      }}
    >
      <Stack direction="row" justifyContent="space-between" padding={2} gap={4}>
        <Box width={'100%'} display="flex">
          <Switch disabled={!enabled} />
          <Stack>
            <Typography variant="subtitle1" component="p">
              {t(basicTrans('participation.lockdown-check.title'))}
            </Typography>
            <Typography variant="body2" component="p">
              {t(basicTrans('participation.lockdown-check.description'))}
            </Typography>
          </Stack>
        </Box>
        <Box width={'100%'} display="flex">
          <PasswordField
            label={`${t('common.invigilator')} ${t('common.password').toLowerCase()}`}
            inputProps={{
              fullWidth: true,
              disabled: !enabled,
            }}
          />
        </Box>
        <Box width={'100%'} display="flex">
          <PasswordField
            label={`${t('common.invigilator')} ${t('common.password').toLowerCase()}`}
            inputProps={{
              fullWidth: true,
              disabled: !enabled,
            }}
          />
        </Box>
      </Stack>
    </ActionCard>
  );
};

export const Basic = () => {
  return (
    <Grid2
      container
      spacing={3}
      margin={0}
      padding={3}
      component={Card}
      variant="outlined"
      sx={{
        borderTop: 'none',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
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
      <Grid2 xs={12} md={6}>
        <MarkingAndReviewBox />
      </Grid2>
      <Grid2 xs={12}>
        <ParticipationBox />
      </Grid2>
    </Grid2>
  );
};
