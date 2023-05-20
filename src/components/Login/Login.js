import { Box, TextField } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectAuthLoading } from 'redux/auth/selectors';

export const Login = () => {
  const isLoading = useSelector(selectAuthLoading);
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
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
    >
      <TextField
        id="outlined-basic"
        name="email"
        label="E-mail"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        name="password"
        label="Password"
        variant="outlined"
        autoComplete="off"
      />
      <LoadingButton
        type="submit"
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
      >
        <span>Log in</span>
      </LoadingButton>
    </Box>
  );
};
