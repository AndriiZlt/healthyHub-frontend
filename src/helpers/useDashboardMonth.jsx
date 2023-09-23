import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import mealsSelectors from 'redux/meals/meals-selectors';

const calculateDay = data => {
  const result = {
    breakfast: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    lunch: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    dinner: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    snack: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    water: 0,
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    date: '',
  };
  const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
  for (const item of meals) {
    for (const record of data[item]) {
      for (const stat in record) {
        if (stat !== '_id' && stat !== 'name') {
          result[item][stat] += record[stat];
        }
      }
    }
  }
  for (const meal of meals) {
    for (const nutrient in result[meal]) {
      result[nutrient] += result[meal][nutrient];
    }
  }
  result.water = data.water;
  result.date = data.date;
  // console.log('calculated result=>', result);
  return result;
};

const useDashboardMonth = async () => {
  const chart = [];
  const dispatch = useDispatch();
  const month = useSelector(mealsSelectors.getMonth);
  useEffect(() => {
    dispatch(mealsOperations.fetchMonth());
  }, [dispatch]);
  for (const day of month) {
    const result = calculateDay(day);
    chart.push({
      date: result.date,
      calories: result.calories,
      water: result.water,
      weight: result.weight,
    });
  }
  // console.log('chart', chart);
  return chart;
};

export default useDashboardMonth;
