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

const dashboardMonthHelper = month => {
  const chartData = [];

  // const month = useSelector(mealsSelectors.getMonth);

  for (const day in month) {
    const result = calculateDay(month[day]);

    chartData.push({
      date: result.date || '0',
      calories: result.calories || '0',
      water: result.water || '0',
      weight: result.weight || '0',
    });
  }

  // console.log('chartData', chartData);

  return chartData;
};

export default dashboardMonthHelper;
