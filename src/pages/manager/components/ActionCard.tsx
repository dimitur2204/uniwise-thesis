import { Box, Button, Card, CardActions, CardContent, SxProps, Typography } from '@mui/material';
import { Check, Edit } from '@mui/icons-material';
import { PropsWithChildren, useState } from 'react';
import { CARD_BORDER } from '../../../theme';
import { useTranslation } from 'react-i18next';

export interface ActionCardProps extends PropsWithChildren {
  title: string;
  onClickEdit?: () => void;
  onClickSave?: () => void;
  hideButtons?: boolean;
  sx?: SxProps;
  contentSx?: SxProps;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  onClickEdit,
  onClickSave,
  children,
  sx,
  hideButtons,
  contentSx,
}) => {
  const [editing, setEditing] = useState(false);
  const { t } = useTranslation();
  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 400,
        ...sx,
      }}
    >
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
      {!hideButtons && (
        <CardActions
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={() => {
              setEditing(true);
              onClickEdit?.();
            }}
            variant="contained"
            color="secondary"
            endIcon={<Edit />}
            disabled={editing}
          >
            {t('common.edit')}
          </Button>
          <Button
            onClick={() => {
              setEditing(false);
              onClickSave?.();
            }}
            variant="contained"
            endIcon={<Check />}
            disabled={!editing}
          >
            {t('common.save')}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
