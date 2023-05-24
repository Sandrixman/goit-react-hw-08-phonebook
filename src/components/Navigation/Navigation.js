import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBar, Toolbar } from '@mui/material';
import { LinkStyled, TypographyStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <AppBar position="static" elevation={16} sx={{ height: 'fit-content' }}>
        <Toolbar>
          <TypographyStyled variant="h6" sx={{ flexGrow: 1 }}>
            <LinkStyled to={'/'}>Home</LinkStyled>
            {isLoggedIn && <LinkStyled to={'phonebook'}>Phonebook</LinkStyled>}
          </TypographyStyled>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
