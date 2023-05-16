import { AddCard } from '../AddCard';
import { Card } from '@mui/material';

export const Combine = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 5,
        py: 2,
      }}
    >
      <AddCard
        title="Combine"
        description="You can combine the flow with subsequent flows in a series, where the participants are automatically transferred to the next flow"
        addButtonLabel="Add Flow"
        emptyLabel="The flow is not a part of a combined series"
        sx={{
          p: 1,
        }}
      />
    </Card>
  );
};
