import { Suspense, createContext, useContext } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';
import { Spiner } from 'components/Spiner/Spiner';
import { ThemeSwither } from 'utils/ThemeSwither';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Layout = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  console.log(theme);

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
