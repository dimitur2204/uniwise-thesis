import { AddCard } from '../AddCard';
import { Card } from '@mui/material';

export const Sources = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 5,
        py: 2,
      }}
    >
      <AddCard
        title="Sources"
        description="On this page, you can see the sources added to the flow. You can add additional sources in order to merge data onto the same flow."
        addButtonLabel="Add sources"
        emptyLabel="No sources added"
        sx={{
          p: 1,
        }}
      />
    </Card>
  );
};
