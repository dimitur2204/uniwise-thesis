import { Box, Button, Typography } from '@mui/material';
import logoUrl from '../../../assets/logo.svg';
import { theme } from '../../../theme';
import { common } from '@mui/material/colors';

export const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        backgroundColor: common.white,
        py: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={theme.spacing(3)}>
        <img src={logoUrl} alt="logo" />
        <Typography>Blog</Typography>
        <Typography>Changelog</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={theme.spacing(3)}>
        <Button variant="contained" color="secondary">
          English (UK)
        </Button>
        <Button variant="contained">Log in</Button>
      </Box>
    </Box>
  );
};
