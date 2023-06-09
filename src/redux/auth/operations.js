import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      toast.success(`${data.user.name} successfully registered`, {
        position: 'top-center',
        autoClose: 3000,
      });
      return data;
    } catch (error) {
      const response = error.request.response;
      const object = JSON.parse(response);
      object.errors?.name &&
        toast.error(`${object.errors.name.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      object.errors?.email &&
        toast.error(`${object.errors.email.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      object.errors?.password &&
        toast.error(`${object.errors.password.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error('Incorrect login or password', {
        position: 'top-center',
        autoClose: 2000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
