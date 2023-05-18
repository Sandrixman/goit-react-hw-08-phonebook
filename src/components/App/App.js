import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';
import { useSelectors } from 'Hooks/useSelectors';
import { Layout } from 'components/Layout/Layout';
import { Phonebook } from 'pages/Phonebook';
import { ErrorPage } from 'pages/ErrorPage';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { Home } from 'pages/Home';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelectors();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="registration"
            element={
              isLoggedIn ? <Navigate to={'/phonebook'} /> : <Registration />
            }
          />
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to={'/phonebook'} /> : <Login />}
          />
          <Route
            path="phonebook"
            element={
              shouldRedirect ? <Navigate to={'/login'} /> : <Phonebook />
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
