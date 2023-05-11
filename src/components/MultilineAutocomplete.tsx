import { Autocomplete, TextField } from '@mui/material';
import participants from '../assets/participants.json';
export const MultilineAutocomplete = () => {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={participants}
      getOptionLabel={(p) => p?.name ?? ''}
      renderInput={(params) => (
        <TextField {...params} variant="standard" label="Multiple values" placeholder="Favorites" />
      )}
    />
  );
};
