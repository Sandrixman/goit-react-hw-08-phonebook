import { Link } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  return (
    <>
      {true && (
        <>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>
        </>
      )}
      {false && <UserMenu />}
    </>
  );
};
