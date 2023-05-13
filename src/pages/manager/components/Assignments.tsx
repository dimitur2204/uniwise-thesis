import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  ButtonGroup,
  IconButton,
  Chip,
  darken,
} from '@mui/material';
import { ContentCopy, Edit, Settings, Visibility } from '@mui/icons-material';
import { common, orange } from '@mui/material/colors';
import { CARD_BORDER } from '../../../theme';
import { theme } from '../../../theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export type AssignmentCardProps = {
  title: string;
  description: string;
  author: string;
  reference: string;
  color: string;
};
const AssignmentCard: React.FC<AssignmentCardProps> = ({
  title,
  description,
  author,
  reference,
  color,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 2,
        py: 1,
        position: 'relative',
      }}
    >
      <Chip
        clickable
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 10,
          px: 0.5,
          backgroundColor: color,
          '&:hover': {
            backgroundColor: darken(color, 0.2),
          },
        }}
        label={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: common.white,
            }}
          >
            <ContentCopy
              sx={{
                fill: common.white,
                mr: 1,
              }}
            />
            {reference}
          </Box>
        }
      />
      <Stack>
        <Typography variant="h6" component="h4">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">Author: {author}</Typography>
          <IconButton aria-label="Preview assignment">
            <Visibility />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};
export const Assignments = () => {
  return (
    <Card variant="outlined">
      <Box
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: CARD_BORDER,
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h5" component="h3">
          Assignments
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        py={2}
        px={5}
        gap={2}
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: CARD_BORDER,
        }}
      >
        <Typography variant="body2" width={'50%'} minWidth={300}>
          Here you can upload assignments and, optionally, appendix material. It will be accessible
          to the participants when the flow opens for participation
        </Typography>
        <ButtonGroup
          sx={{
            justifySelf: 'flex-end',
          }}
        >
          <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">
            Manage assignments
          </Button>
          <Button startIcon={<Edit />} variant="contained" color="secondary" size="small">
            Assignment authoring
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack
        py={2}
        px={5}
        gap={2}
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: CARD_BORDER,
        }}
      >
        <Typography variant="h5" component="h3">
          Assignments list
        </Typography>
        <Grid2 spacing={2} container>
          <Grid2 xs={12} md={6}>
            <AssignmentCard
              title="Biology test"
              description="This is the description of the assignment and what it is about"
              author="Dimitar Nizamov"
              reference="AC58-FK32"
              color={theme.palette.primary.main}
            />
          </Grid2>
          <Grid2 xs={12} md={6}>
            <AssignmentCard
              title="Biology test"
              description="This is the description of the assignment and what it is about"
              author="Dimitar Nizamov"
              reference="AC58-FK32"
              color={orange[500]}
            />
          </Grid2>
        </Grid2>
      </Stack>
    </Card>
  );
};
