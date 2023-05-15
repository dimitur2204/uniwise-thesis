import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  FormControl,
  FormControlProps,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  InputProps,
} from '@mui/material';
import { useState } from 'react';

export type PasswordFieldProps = {
  label: string;
  inputProps?: FormControlProps;
};
export const PasswordField: React.FC<PasswordFieldProps> = ({ label, inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="standard" {...inputProps}>
      <InputLabel htmlFor={`outlined-adornment-password-${label}`}>{label}</InputLabel>
      <Input
        id={`outlined-adornment-password-${label}`}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
