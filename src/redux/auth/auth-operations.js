import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthhub.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  console.log('inside register', JSON.stringify(credentials));
  try {
    const { data } = await axios.post('/user/register', credentials);
    console.log(data);
    console.log('token=>' + data.token);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error();
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  console.log('login', JSON.stringify(credentials));
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log('token=>' + data.token);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Login', error.response.data);
    throw error();
  }
});

const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
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
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log('error in fetching current user', error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
