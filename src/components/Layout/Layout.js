import { Outlet } from 'react-router-dom';
import { Section } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Section>
      <Navigation />
      <Outlet />
    </Section>
  );
};

export default Layout;
