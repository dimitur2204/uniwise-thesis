import { Box, Button, ButtonGroup, Card, CardProps, Typography } from '@mui/material';

interface TitleProps extends CardProps {
  title: string;
  description: string;
  icon: string;
}
export const Title: React.FC<TitleProps> = ({ title, description, icon, ...props }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
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
      <ButtonGroup>
        <Button variant="contained" color="secondary">
          Settings
        </Button>
        <Button variant="contained" color="secondary">
          Messages
        </Button>
      </ButtonGroup>
    </Card>
  );
};
