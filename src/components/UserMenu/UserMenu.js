import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import { authOperations, authSelectors } from 'redux/auth';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);

  return (
    <>
      <Wrapper>
        <IconContext.Provider value={{ size: '2em' }}>
          <FaUserCircle />
        </IconContext.Provider>
        <p>Wellcome, {user.email}</p>
        <button onClick={() => dispatch(authOperations.logOut())}>
          Logout
        </button>
      </Wrapper>
    </>
  );
};
