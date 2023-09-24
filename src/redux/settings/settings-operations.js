import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-hub.onrender.com/api';

const saveSettings = createAsyncThunk('user/change-settings', async credentials => {
    try {
      const { data } = await axios.patch('/user/change-settings', credentials);
      return data;
    } catch (error) {
      console.log('Error in Settings', error.response.data);
      throw error();
    }
  }
);

const updateAvatar = createAsyncThunk('user/avatars', async credentials => {
   try {
  const { data } = await axios.post('/user/avatars', credentials, { 
  headers: {
 'Content-Type': 'multipart/form-data',
  }})
  return data.avatarURL
  }catch(error){
  console.log('Error in Settings', error.response.data);
  throw error();
  }  
 })

const cancelSettings = () => dispatch => {
  dispatch({ type: 'user/cancel' });
};



const settingsOperations = {
  saveSettings,
  updateAvatar,
  cancelSettings,
};

export default settingsOperations;
