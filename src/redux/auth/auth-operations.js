import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-hub.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logIn = createAsyncThunk('auth/login', async credentials => {
  console.log('login', JSON.stringify(credentials));
  try {
    const { data } = await axios.post('/user/login', credentials);
    console.log('login token=>' + data.token);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Login', error.response.data);
    throw error();
  }
});

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/user/register', credentials);
    console.log(data.mail);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error();
  } finally {
    console.log('Succesfull registration, login in...');
    const { email, password } = credentials;
    const { data } = await axios.post('/user/login', { email, password });
    console.log('login token=>' + data.token);
    token.set(data.token);
    useSetToken(data.token);
  }
});

const logOut = createAsyncThunk('/user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/user/logout');
    token.unset();
  } catch (error) {
    console.log('error in loging out', error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/user/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
      };
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/user/current');
      console.log('inside fetch current user', data);
      return data;
    } catch (error) {
      console.log('error in fetching current user', error.message);
    }
  }
);

const checkEmail = createAsyncThunk('user/checkEmail', async credentials => {
  try {
    const response = await axios.post('/user/check-email', credentials);
    return response;
  } catch (error) {
    console.log('Error in register', error.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  checkEmail,
};

export default authOperations;
