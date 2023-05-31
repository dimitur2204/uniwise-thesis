import { Message, Settings } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Card, CardProps, Stack, Typography } from '@mui/material';
import FlowMenu from './FlowMenu';
import { useContext } from 'react';
import { ExternalPageModalContext } from '../../../components/ExternalPageModal';
import { useTranslation } from 'react-i18next';

interface TitleProps extends CardProps {
  title: string;
  description: string;
  icon: string;
}

export const Title: React.FC<TitleProps> = ({ title, description, icon, sx, ...props }) => {
  const { setOpen } = useContext(ExternalPageModalContext);
  const { t } = useTranslation();
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        ...sx,
      }}
      {...props}
    >
      <Box display="flex" justifyContent="space-between" gap={2}>
        <img src={icon} alt="icon" />
        <Box>
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
        <ButtonGroup>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Settings />}
            onClick={() => {
              setOpen?.(true);
            }}
          >
            {t('index.action.settings')}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Message />}
            onClick={() => {
              setOpen?.(true);
            }}
          >
            {t('index.action.messages')}
          </Button>
        </ButtonGroup>
        <FlowMenu />
      </Stack>
    </Card>
  );
};
