import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};
