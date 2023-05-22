import { Suspense, createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';
import { Spiner } from 'components/Spiner/Spiner';
import { ThemeSwither } from 'utils/ThemeSwither';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const Layout = () => {
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
        <ThemeSwither />
        <Navigation />
        <Suspense fallback={<Spiner />}>
          <Section>
            <Outlet />
          </Section>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
