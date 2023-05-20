import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from './Layout.styled';
import { Spiner } from 'components/Spiner/Spiner';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spiner />}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};
