import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMeals = createAsyncThunk('meals/getMeals', async userId => {
  try {
    const { data } = await axios.get('/meals', userId);
    console.log(data);
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error();
  }
});

const fetchDay = createAsyncThunk('meals/fetchDay', async () => {
  console.log('Fetching day...');
  try {
    const { data } = await axios.get('/user/day');
    // console.log('data', data);
    if (data.message === 'Day not found!') {
      console.log('creating day...');
      const { data } = await axios.post('/user/day');
      console.log('data after creating', data);

      return data;
    } else {
      return data[0];
    }
  } catch (error) {
    console.log('Error in fetching day', error.response.data);
    throw error();
  }
});

const fetchMonth = createAsyncThunk('meals/fetchMonth', async () => {
  console.log('Fetching month...');
  try {
    const { data } = await axios.get('/user/day/month');
    console.log('data in fetching month', data.newStatistic);
    return data.newStatistic;
  } catch (error) {
    console.log('Error in fetching month', error.response.data);
    throw error();
  }
});

const fetchYear = createAsyncThunk('meals/fetchYear', async () => {
  console.log('Fetching Year...');
  try {
    const { data } = await axios.get('/user/day/year');
    console.log('data in fetching year', data.newStatistic);
    return data.newStatistic;
  } catch (error) {
    console.log('Error in fetching year', error.response.data);
    throw error();
  }
});

const waterIntake = createAsyncThunk('meals/waterIntake', async waterIntake => {
  console.log('Sending water intake', waterIntake);
  try {
    const { data } = await axios.post('/user/water-intake', waterIntake);
    return data;
  } catch (error) {
    console.log('Error in water intake sending', error.response.data);
    throw error();
  }
});

// const recordMeal = createAsyncThunk('meals/sendMeal', async meal => {
//   console.log('Recording meal...', meal);
//   try {
//     const { data } = await axios.post('/user/day/food-intake', meal.record);
//     console.log('Meal data after record', data);
//     return data;
//   } catch (error) {
//     console.log('Error in meal record sending', error.response.data);
//     throw error();
//   }
// });

const recordMeal = createAsyncThunk('meals/sendMeal', async meal => {
  console.log('Recording meal', meal);
  try {
    if (meal.title === 'Breakfast') {
      const { data } = await axios.patch('/user/day/breakfast', meal.record);
      console.log('breakfast data', data);
      return data;
    } else if (meal.title === 'Lunch') {
      const { data } = await axios.patch('/user/day/lunch', meal.record);
      console.log('lunch data', data);
      return data;
    } else if (meal.title === 'Dinner') {
      const { data } = await axios.patch('/user/day/dinner', meal.record);
      console.log('dinner data', data);
      return data;
    } else if (meal.title === 'Snack') {
      const { data } = await axios.patch('/user/day/snack', meal.record);
      console.log('snack data', data);
      return data;
    } else {
      console.log('No record was sent');
    }
  } catch (error) {
    console.log('Error in meal record sending', error.response.data);
    throw error();
  }
});

const getMonth = createAsyncThunk('meals/getMonth', async () => {
  try {
    const { data } = await axios.get('/user/day/year'); // eslint-disable-line
  } catch (error) {
    console.log('Error in water intake sending', error.response.data);
    throw error();
  }
});

const getYear = createAsyncThunk('meals/getYear', async () => {
  try {
    const { data } = await axios.get('/user/day/year');
    console.log(data.newStatistic);
  } catch (error) {
    console.log('Error in water intake sending', error.response.data);
    throw error();
  }
});

const mealsOperations = {
  fetchMeals,
  waterIntake,
  fetchDay,
  fetchMonth,
  fetchYear,
  recordMeal,
  getMonth,
  getYear,
};

export default mealsOperations;
