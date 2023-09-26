import React from 'react';
import css from './Dashboard.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import dayjs from 'dayjs'; // eslint-disable-line
import useDashboardYear from 'helpers/useDashboardYear';
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
  const { weight } = useDashboardYear(
    userYearData,
    props.daysInMonth,
    props.currentMonth
  );

  // Getting current month
  const today = Number(dayjs(new Date()).format('MM'));
  const chartData = [];

  monthNames.forEach(month => {
    if (weight[monthNames.indexOf(month)]) {
      chartData.push({ month, weight: weight[monthNames.indexOf(month)] });
    } else {
      chartData.push({ month, weight: ' ' });
    }
  });

  const average = Math.floor(
    weight.reduce((acc, value) => (acc += value), 0) / Number(today)
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
