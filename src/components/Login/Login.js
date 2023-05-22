import { useState } from 'react';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { authSelectors } from 'redux/auth';
import { BoxStyled, Button } from './Login.styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
    <BoxStyled
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
    >
      <Typography variant="h4" component="h2">
        Phonebook
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        name="email"
        label="E-mail"
        variant="outlined"
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          name="password"
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        type="submit"
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
      >
        Log in
      </Button>
      <Link to="/registration">No account? Register now!</Link>
    </BoxStyled>
  );
};
