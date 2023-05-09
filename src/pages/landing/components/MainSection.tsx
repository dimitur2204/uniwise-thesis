import { Box, Button, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import personUrl from '../../../assets/landing-person.svg';
import waveUrl from '../../../assets/landing-wave.svg';
import { theme } from '../../../theme';
import { LinkButton } from '../../../LinkButton';

export const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: common.white,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(3),
        }}
      >
        <img src={personUrl} alt="person" />
        <Box>
          <Typography variant="h5">Redesigned pages</Typography>
          <Typography>The redesigned pages for our thesis project here explained</Typography>
          <LinkButton variant="contained" color="secondary" to="/page/manager">
            Manager
          </LinkButton>
          <LinkButton variant="contained" to="/page/lockdown">
            Lockdown
          </LinkButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: '80vh',
        }}
      />

      <img
        src={waveUrl}
        alt="person"
        style={{
          position: 'absolute',
        }}
      />
      <Box
        sx={{
          background: 'linear-gradient(90deg,#769b08,#bad377 90%)',
          height: '20vh',
        }}
      />
    </Box>
  );
};
