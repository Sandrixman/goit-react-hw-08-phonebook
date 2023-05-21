import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectAuthLoading } from 'redux/auth/selectors';
import { BoxStyled, Button, Input } from './Login.styled';

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
    <BoxStyled
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
    >
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
        autoComplete="off"
      />
      <Button
        type="submit"
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
      >
        <span>Log in</span>
      </Button>
    </BoxStyled>
  );
};
