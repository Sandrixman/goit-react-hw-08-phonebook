import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div>
        <p>mango@mail.com</p>
        <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};
