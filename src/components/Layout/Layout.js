import { Outlet } from 'react-router-dom';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <Section>
      <Outlet />
    </Section>
  );
};

export default Layout;
