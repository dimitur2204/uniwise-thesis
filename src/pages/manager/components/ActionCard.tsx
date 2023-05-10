import { Box, Button, Card, CardActions, CardContent, SxProps, Typography } from '@mui/material';
import { Check, Edit } from '@mui/icons-material';
import { PropsWithChildren } from 'react';
import { CARD_BORDER } from '../../../theme';

export interface ActionCardProps extends PropsWithChildren {
  title: string;
  onClickEdit?: () => void;
  onClickSave?: () => void;
  sx?: SxProps;
  contentSx?: SxProps;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  onClickEdit,
  onClickSave,
  children,
  sx,
  contentSx,
}) => {
  return (
    <Card variant="outlined" sx={sx}>
      <Box
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: CARD_BORDER,
          p: 2,
        }}
      >
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
      </Box>
      <CardContent sx={contentSx}>{children}</CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Button onClick={onClickEdit} variant="contained" color="secondary" endIcon={<Edit />}>
          Edit
        </Button>
        <Button onClick={onClickSave} variant="contained" endIcon={<Check />}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
