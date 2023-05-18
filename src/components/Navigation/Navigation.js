import { AppBar, Box, Toolbar } from '@mui/material';
import { useSelectors } from 'Hooks/useSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { LinkStyled, TypographyStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <Box sx={{}}>
        <AppBar position="static">
          <Toolbar>
            <TypographyStyled variant="h6" sx={{ flexGrow: 1 }}>
              <LinkStyled to={'/'}>Home</LinkStyled>
              {isLoggedIn && (
                <LinkStyled to={'phonebook'}>Phonebook</LinkStyled>
              )}
            </TypographyStyled>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
