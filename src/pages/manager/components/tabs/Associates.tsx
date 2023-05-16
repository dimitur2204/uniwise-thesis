import { AddBox, LockClock, PersonAddAlt } from '@mui/icons-material';
import { AddCard } from '../AddCard';
import { Card } from '@mui/material';

export const Associates = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        px: 5,
        py: 2,
      }}
    >
      <AddCard
        title="Authors"
        description="Authors can create and add assignments and rubrics on active and inactive flows that the author is assigned to"
        addButtonLabel="Add author"
        emptyLabel="No authors added"
        Icon={PersonAddAlt}
        sx={{
          p: 1,
        }}
      />
      <AddCard
        title="Invigilators"
        description="Can monitor the participants during examinations"
        addButtonLabel="Add invigilator"
        emptyLabel="No invigilators added"
        Icon={LockClock}
        sx={{
          p: 1,
          mt: 2,
        }}
      />
      <AddCard
        title="Managers"
        description="Can supplement your own role as a manager"
        addButtonLabel="Add managers"
        emptyLabel="No managers added"
        Icon={AddBox}
        sx={{
          p: 1,
          mt: 2,
        }}
      />
    </Card>
  );
};
