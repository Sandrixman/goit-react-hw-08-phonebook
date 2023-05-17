import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h2>Sorry, the page not found</h2>
      <Link to={'/goit-react-hw-07-phonebook'}>Return Home-page</Link>
    </>
  );
};
