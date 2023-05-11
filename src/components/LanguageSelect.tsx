import { Autocomplete, Box, TextField } from '@mui/material';
import { common } from '@mui/material/colors';
import countries from '../assets/countries-map.json';
export function LanguageSelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      autoHighlight
      sx={{
        width: 90,
        label: {
          color: common.white,
        },
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Language"
          variant="standard"
          color="secondary"
          sx={{
            input: {
              color: common.white,
            },
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
