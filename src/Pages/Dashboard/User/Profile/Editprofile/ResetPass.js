import React from 'react';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useAuth from '../../../../../Hooks/useAuth';

const ResetPass = () => {
  const { updatePass } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    if (data.newPass === data.retypePass) {
      updatePass(data.retypePass);
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={3}>
          <FormControl
            sx={{
              width: '100%',
              '& label.Mui-focused': {
                color: '#000',
              },
              '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#000',
              },
            }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              New password
            </InputLabel>
            <FilledInput
              {...register('newPass')}
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
        </Box>
        <Box mt={3}>
          <FormControl
            sx={{
              width: '100%',
              '& label.Mui-focused': {
                color: '#000',
              },
              '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#000',
              },
            }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Retype new password
            </InputLabel>
            <FilledInput
              {...register('retypePass')}
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
        </Box>

        <Box mt={3}>
          <button className="simple-button">Change Password</button>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPass;
