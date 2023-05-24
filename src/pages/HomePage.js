import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { RouterLink } from 'components/Login/Login.styled';

export const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        maxWidth: '500px',
        margin: 'auto',
        textAlign: 'justify',
        gap: '20px',
      }}
    >
      <Typography variant="h3" component="h1" mb="20px">
        Phonebook
      </Typography>
      <Typography variant="body1">
        "Phonebook" is a user-friendly application designed to simplify the task
        of storing and managing your contacts. With its intuitive interface,
        this app allows you to effortlessly organize your contacts. Finding the
        information you need is a breeze with the search functionality.
      </Typography>
      {!isLoggedIn && (
        <RouterLink to="/registration">
          <Typography variant="h4" component="p">
            Join in!
          </Typography>
        </RouterLink>
      )}
    </Box>
  );
};
