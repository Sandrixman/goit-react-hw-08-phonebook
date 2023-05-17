import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';
import { Phonebook } from 'pages/Phonebook';
import { ErrorPage } from 'pages/ErrorPage';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
