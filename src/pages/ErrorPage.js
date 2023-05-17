import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h2>Sorry, the page not found</h2>
      <Link to={'/'}>Return Home-page</Link>
    </>
  );
};
