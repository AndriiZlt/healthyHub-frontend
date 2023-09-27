import React from 'react';
import css from './Dashboard.module.css';
import { useSelector } from 'react-redux';
// import dashboardYearHelper from 'helpers/dashboardYearHelper';
import useYearHelper from 'helpers/useYearHelper';
import mealsSelectors from 'redux/meals/meals-selectors';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WeightYearChart = props => {
  const userYearData = useSelector(mealsSelectors.getYear);

  // const { weight } = dashboardYearHelper(userYearData);
  const { weight } = useYearHelper(userYearData);

  // Getting current month
  const chartData = [];

  monthNames.forEach(month => {
    if (weight[monthNames.indexOf(month)]) {
      chartData.push({ month, weight: weight[monthNames.indexOf(month)] });
    } else {
      chartData.push({ month, weight: ' ' });
    }
  });

  // Counting active months
  let count = 0;
  weight.forEach(month => {
    if (month > 0) {
      count += 1;
    }
  });

  const average = Math.floor(
    weight.reduce((acc, value) => (acc += value), 0) / count
  );

  return (
    <>
      <div className={css.blockHeading}>
        <p className={css.blockHeadingText}>Weight</p>
        <p className={css.blockAverageValue}>
          Average value:{' '}
          <span className={css.blockAverageValueSpan}>{average} kg</span>
        </p>
      </div>
      <div className={css.WeightDashboardContainer}>
        <ul className={css.weightDashboardListYear} style={{ marginBottom: 0 }}>
          {chartData.map(item => {
            return (
              <li key={item.month}>
                <p className={css.weightDashboardKgYear}>{item.weight}</p>
                <p className={css.weightDashboardDate}>{item.month}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WeightYearChart;
