import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { logIn } from 'redux/auth/operations';
import { RouterLink } from './Login.styled';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const isLoading = useSelector(authSelectors.selectAuthLoading);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      elevation={16}
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'grid',
        justifyItems: 'center',
        maxWidth: '400px',
        borderRadius: '10px',
        m: 'auto',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="h2">
        Phonebook
      </Typography>
      <TextField fullWidth name="email" label="E-mail" variant="outlined" />
      <FormControl fullWidth variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          name="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <LoadingButton
        type="submit"
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
      >
        Log in
      </LoadingButton>
      <RouterLink to="/registration">No account? Register now!</RouterLink>
    </Paper>
  );
};
