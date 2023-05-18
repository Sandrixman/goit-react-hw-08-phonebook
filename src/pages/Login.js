import { useState } from 'react';
import { Box, TextField, Switch, FormControlLabel } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const [loading, setLoading] = useState(false);
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

  function handleClick() {
    setLoading(true);
  }

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
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Log in</span>
        </LoadingButton>
      </Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <FormControlLabel
          sx={{
            display: 'block',
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>

        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>
    </>
  );
};
