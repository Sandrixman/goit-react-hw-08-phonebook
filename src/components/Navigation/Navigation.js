import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Box sx={{}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <LinkStyled to={'/'}>Phonebook</LinkStyled>
            </Typography>
            {true && (
              <>
                <Button color="inherit">
                  <LinkStyled to={'/login'}>Login</LinkStyled>
                </Button>
                <Button color="inherit">
                  <LinkStyled to={'/Registration'}>Registration</LinkStyled>
                </Button>
              </>
            )}
            {false && <UserMenu />}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
