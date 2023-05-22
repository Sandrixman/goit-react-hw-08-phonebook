import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'justify',
        gap: '20px',
      }}
    >
      <Typography variant="h3" component="h1">
        Phonebook
      </Typography>
      <Typography variant="body1">
        "Phonebook" is a user-friendly and efficient application designed to
        simplify the task of storing and managing your contacts. With its
        intuitive interface, this app allows you to effortlessly organize your
        contacts. Finding the information you need is a breeze with the search
        functionality. Furthermore, "Phonebook" allows you to add additional
        details to each contact, such as email addresses, physical addresses,
        birthdays, and notes. This comprehensive approach ensures that you have
        all the necessary information at your fingertips, making it easier to
        stay connected with your contacts. By providing a streamlined interface,
        powerful search functionality, comprehensive contact details this app
        simplifies the process of organizing and retrieving your contacts.
      </Typography>
      {!isLoggedIn && (
        <Link to="/registration">
          <Typography variant="h3" component="p">
            Join in!
          </Typography>
        </Link>
      )}
    </Box>
  );
};
