import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';
import { Phonebook } from 'pages/Phonebook';
import { ErrorPage } from 'pages/ErrorPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-07-phonebook" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
