import { Button } from '@mui/material';
import { LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Button color="inherit">
        <LinkStyled to={'login'}>Login</LinkStyled>
      </Button>
      <Button color="inherit">
        <LinkStyled to={'registration'}>Registration</LinkStyled>
      </Button>
    </>
  );
};
