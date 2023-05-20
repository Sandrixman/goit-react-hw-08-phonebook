import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h2>Sorry, the page not found</h2>
      <Link to={'/'}>Return Home-page</Link>
    </>
  );
};

export default ErrorPage;
