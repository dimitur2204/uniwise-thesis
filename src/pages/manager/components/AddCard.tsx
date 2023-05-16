import { Add } from '@mui/icons-material';
import { Button, Card, CardProps, Stack, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { theme } from '../../../theme';
import { grey } from '@mui/material/colors';

interface AddCardProps extends CardProps {
  title: string;
  description: string;
  addButtonLabel: string;
  emptyLabel: string;
  // Icon of type that can be called as a react component
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export const AddCard: React.FC<AddCardProps> = ({
  title,
  description,
  addButtonLabel,
  emptyLabel,
  Icon,
  children,
  ...props
}) => {
  return (
    <Card variant="outlined" {...props}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" justifyContent="space-between">
          {Icon && (
            <Icon
              sx={{
                fontSize: 50,
                mr: 1,
                color: grey[600],
              }}
            />
          )}
          <Stack>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>
        </Stack>
        <Button variant="contained" color="primary" startIcon={<Add />}>
          {addButtonLabel}
        </Button>
      </Stack>
      {!children && (
        <Card
          variant="outlined"
          sx={{
            mt: 2,
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 60,
            borderStyle: 'dashed',
          }}
        >
          <Typography variant="body2" sx={{ mt: 2 }}>
            {emptyLabel}
          </Typography>
        </Card>
      )}
    </Card>
  );
};
