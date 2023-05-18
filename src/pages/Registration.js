import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { register } from 'redux/auth/operations';

export const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
        />
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
        />
        <LoadingButton
          type="submit"
          endIcon={<SendIcon />}
          loadingPosition="end"
          variant="contained"
        >
          <span>Log in</span>
        </LoadingButton>
      </Box>
    </>
  );
};
