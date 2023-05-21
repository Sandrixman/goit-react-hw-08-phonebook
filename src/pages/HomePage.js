import { useContext, useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <div>
        <h1>Phonebook</h1>
        <h2>
          "Phonebook" is a user-friendly and efficient application designed to
          simplify the task of storing and managing your contacts. With its
          intuitive interface, this app allows you to effortlessly organize your
          contacts. Finding the information you need is a breeze with the search
          functionality. Furthermore, "Phonebook" allows you to add additional
          details to each contact, such as email addresses, physical addresses,
          birthdays, and notes. This comprehensive approach ensures that you
          have all the necessary information at your fingertips, making it
          easier to stay connected with your contacts. By providing a
          streamlined interface, powerful search functionality, comprehensive
          contact details this app simplifies the process of organizing and
          retrieving your contacts.
        </h2>
        <a href="/goit-react-hw-08-phonebook/login">
          <p>Join in!</p>
        </a>
      </div>
    </Box>
  );
}

export const HomePage = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
