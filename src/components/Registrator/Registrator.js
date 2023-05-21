import { useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { authOperations } from 'redux/auth';
import { BoxStyled, Button, Input } from '../Login/Login.styled';

export const Registrator = () => {
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
    <BoxStyled
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input id="outlined-basic" name="name" label="Name" variant="outlined" />
      <Input
        id="outlined-basic"
        name="email"
        label="E-mail"
        variant="outlined"
      />
      <Input
        id="outlined-basic"
        name="password"
        label="Password"
        variant="outlined"
      />
      <Button
        type="submit"
        endIcon={<SendIcon />}
        loadingPosition="end"
        variant="contained"
      >
        <span>Log in</span>
      </Button>
    </BoxStyled>
  );
};
