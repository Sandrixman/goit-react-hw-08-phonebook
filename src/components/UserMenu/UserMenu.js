import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import { authOperations, authSelectors } from 'redux/auth';
import { ButtonStyled, Wrapper } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);

  return (
    <>
      <Wrapper>
        <IconContext.Provider value={{ size: '2em' }}>
          <FaUserCircle />
        </IconContext.Provider>
        <p>Wellcome, {user.name}</p>
        <ButtonStyled
          sx={{ minWidth: '38px', width: '38px' }}
          onClick={() => dispatch(authOperations.logOut())}
        >
          <LogoutIcon />
        </ButtonStyled>
      </Wrapper>
    </>
  );
};
