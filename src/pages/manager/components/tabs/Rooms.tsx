import { DoorBack } from '@mui/icons-material';
import { AddCard } from '../AddCard';
import { Card } from '@mui/material';

export const Rooms = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 5,
        py: 2,
      }}
    >
      <AddCard
        title="Rooms"
        description="Rooms to be added that the participants will be split in"
        addButtonLabel="Add room"
        emptyLabel="No rooms added"
        Icon={DoorBack}
        sx={{
          p: 1,
        }}
      />
    </Card>
  );
};
