import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default Layout;
