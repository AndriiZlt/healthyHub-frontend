import { useSelector } from 'react-redux';
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

const useYearHelper = () => {
  const year = useSelector(mealsSelectors.getYear);
  const date = new Date();
  const currentMonth = date.getMonth() + 1;

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

    if (Number(month) <= Number(currentMonth)) {
      if (dayCount === 0) {
        yearChartData.calories.push(0);
        yearChartData.water.push(0);
        yearChartData.weight.push(0);
      } else {
        yearChartData.calories.push(Math.floor(sumCal / dayCount));
        yearChartData.water.push(Math.floor(sumWater / dayCount));
        yearChartData.weight.push(Math.floor(sumWeight / dayCount));
      }
    }
  });

  return yearChartData;
};

export default useYearHelper;
