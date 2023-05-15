import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

export const ExitButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 30px',
  backgroundColor: '#B04545',
  color:'white',
  fontFamily: 'Signika-Bold',
  borderBottomRightRadius: '0px',
  borderBottomLeftRadius: '0px',
  '&:hover': {
    backgroundColor: '#9C3131',
   },
   '&:active': {
     backgroundColor: '#9C3131',
   },
   '&:focus': {
     backgroundColor: '#9C3131',
   },
});

export const SubmitButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 30px',
    backgroundColor: '#628010',
    color:'white',
    fontFamily: 'Signika-Bold',
    '&:hover': {
     backgroundColor: '#3f530a',
    },
    '&:active': {
      backgroundColor: '#3f530a',
      boxShadow: '0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset'
    },
    '&:focus': {
      backgroundColor: '#3f530a',
      boxShadow: '0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset'
    },
  });

