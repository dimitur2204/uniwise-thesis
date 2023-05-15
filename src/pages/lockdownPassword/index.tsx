import { WfModal } from '../lockdownAssignment/components/WfModal/WfModal';
import personUrl from '../../assets/landing-person.svg';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LinkButton } from '../../components/LinkButton';
import './lockdownPassword.css';

export const LockdownPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <WfModal
        size="small"
        open
        styles={{ overlayStyle: { backgroundColor:'#A9ABAF', opacity: '1' } }}
      >
        <WfModal.Title>Participation password</WfModal.Title>
        <WfModal.Content style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={personUrl} alt="person" style={{ width: '30%' }} />
          <div className="content">
            <WfModal.Description>
              <p>To access the flow, please enter the participation password</p>
            </WfModal.Description>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                label="Password"
              />
            </FormControl>
          </div>
        </WfModal.Content>
        <WfModal.Footer>
          <LinkButton variant="contained" to="/" size="large" color="secondary">
            Cancel
          </LinkButton>
          <LinkButton variant="contained" to="/page/lockdown" size="large">
            Confirm
          </LinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
