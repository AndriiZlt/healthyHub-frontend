import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-hub.onrender.com/api';

const saveSettings = createAsyncThunk(
  'user/change-settings',
  async userData => {
    try {
      const { data } = await axios.patch('/user/change-settings', userData);
      return data;
    } catch (error) {
      console.log('Error in Settings', error.response.data);
      throw error();
    }
  }
);

const cancelSettings = () => dispatch => {
  dispatch({ type: 'user/cancel' });
};

const settingsOperations = {
  saveSettings,
  cancelSettings,
};

export default settingsOperations;
