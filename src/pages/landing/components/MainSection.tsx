import { Box, Button, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import personUrl from '../../../assets/landing-person.svg';
import { theme } from '../../../theme';
import { LinkButton } from '../../../components/LinkButton';

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
          top: 230,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(9),
          width: '100%',
          maxWidth: '86rem',
        }}
      >
        <img src={personUrl} alt="person" />
        <Box>
          <Typography variant="h3">Redesigned pages</Typography>
          <Typography>The redesigned pages for our thesis project here explained</Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              gap: theme.spacing(3),
            }}
          >
            <LinkButton variant="contained" color="secondary" to="/page/manager" size="large">
              Manager
            </LinkButton>
            <LinkButton variant="contained" to="/page/lockdown" size="large">
              Lockdown
            </LinkButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
