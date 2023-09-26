import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import mealsSelectors from 'redux/meals/meals-selectors';
import uniqid from 'uniqid';
// carbs
const min1 = 200;
const max1 = 320;
// protein
const min2 = 100;
const max2 = 150;
// fat
const min3 = 10;
const max3 = 50;
// calories
const min4 = 1000;
const max4 = 2500;
// weight
const min5 = 87;
const max5 = 93;

// water
const min6 = 800;
const max6 = 1500;

const GenerateYear = data => {
  const dispatch = useDispatch();

  const year = useSelector(mealsSelectors.getYear);
  useEffect(() => {
    dispatch(mealsOperations.fetchYear());
  }, [dispatch]);

  const yearFull = [];
  for (let day in year) {
    yearFull.push({
      ...year[day],
      breakfast: {
        name: 'Apple',
        carbonohidrates: Math.floor(Math.random() * (max1 - min1 + 1)) + min1,
        protein: Math.floor(Math.random() * (max2 - min2 + 1)) + min2,
        fat: Math.floor(Math.random() * (max3 - min3 + 1)) + min3,
        calories: Math.floor(Math.random() * (max4 - min4 + 1)) + min4,
        _id: uniqid(),
      },
      water: Math.floor(Math.random() * (max6 - min6 + 1)) + min6,
      weight: Math.floor(Math.random() * (max5 - min5 + 1)) + min5,
    });
  }
  return (
    <>
      <p>Year:</p>
      {JSON.stringify(yearFull)}
    </>
  );
};

export default GenerateYear;
