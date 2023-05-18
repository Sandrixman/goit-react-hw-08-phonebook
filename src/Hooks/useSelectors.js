import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from 'redux/auth/selectors';
import { selectLoading } from 'redux/phonebook/selectors';

export const useSelectors = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    isLoading,
  };
};
