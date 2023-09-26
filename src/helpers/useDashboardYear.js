import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import mealsSelectors from 'redux/meals/meals-selectors';

const calculateDay = data => {
  const result = {
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    date: '',
    weight: 0,
  };
  const meals = ['breakfast', 'lunch', 'dinner', 'snack'];

  for (const meal of meals) {
    // Breakfast, lunch....
    for (const intake of data[meal]) {
      // data.breakfast.intake
      result.calories += intake.calories;
    }
  }
  result.date = data.date.slice(8, 10);
  result.month = data.date.slice(5, 7);
  result.water = data.water || null;
  result.weight = data.weight || null;
  return result;
};

const useDashboardYear = (data, daysInMonth, currentMonth) => {
  const dispatch = useDispatch();
  const year = useSelector(mealsSelectors.getYear);

  useEffect(() => {
    dispatch(mealsOperations.fetchYear());
  }, [dispatch]);

  //   Calculating days to simple statustics
  const calculatedDays = [];
  year.forEach(element => {
    calculatedDays.push(calculateDay(element));
  });

  // Calculating Months statustics
  const yearChartData = {
    calories: [],
    water: [],
    weight: [],
  };

  [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ].forEach(month => {
    let sumCal = 0;
    let sumWater = 0;
    let sumWeight = 0;
    let dayCount = 0;
    calculatedDays.forEach(day => {
      if (Number(day.month) === Number(month)) {
        sumCal += day.calories;
        sumWater += day.water;
        sumWeight += day.weight;
        dayCount += 1;
      }
    });

    if (sumCal !== 0) {
      if (Number(month) === Number(currentMonth)) {
        const date = new Date();
        const days = date.toString().slice(7, 10);
        yearChartData.calories.push(Math.floor(sumCal / Number(days)));
        yearChartData.water.push(Math.floor(sumWater / Number(days)));
        yearChartData.weight.push(Math.floor(sumWeight / Number(days)));
      } else {
        yearChartData.calories.push(Math.floor(sumCal / dayCount));
        yearChartData.water.push(Math.floor(sumWater / dayCount));
        yearChartData.weight.push(Math.floor(sumWeight / dayCount));
      }
    }
  });

  return yearChartData;
};

export default useDashboardYear;
