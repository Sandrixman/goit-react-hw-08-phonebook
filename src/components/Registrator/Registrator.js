import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { RouterLink } from 'components/Login/Login.styled';

export const Registrator = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
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
      <TextField fullWidth name="name" label="Name" variant="outlined" />
      <TextField fullWidth name="email" label="E-mail" variant="outlined" />
      <FormControl fullWidth variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          name="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <LoadingButton
        type="submit"
        sx={{ width: '150px' }}
        endIcon={<SendIcon />}
        loadingPosition="end"
        variant="contained"
      >
        <span>Sign up</span>
      </LoadingButton>
      <RouterLink to="/registration">Log in to your account</RouterLink>
    </Paper>
  );
};
