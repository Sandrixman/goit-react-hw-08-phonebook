import { Suspense, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';
import { Spiner } from 'components/Spiner/Spiner';
import { ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const Layout = () => {
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
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
