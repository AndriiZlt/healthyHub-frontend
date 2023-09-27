import React from 'react';
import css from './Dashboard.module.css';
import dayjs from 'dayjs'; // eslint-disable-line
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const WeightMonthChart = props => {
  const userMonthData = [...props.userMonthData];
  const currentWeight = useSelector(authSelectors.getWeight);
  // console.log('userMonthData in weight month chart', userMonthData);

  const firstDay = Number(userMonthData[0].date);

  const fullMonth = [];

  let previousDayWeight = userMonthData[0].weight;
  const today = Number(dayjs(new Date()).format('DD'));

  // Pushing empty weight if there is no record
  for (let i = 1; i < firstDay; i++) {
    fullMonth.push({
      date: i,
      weight: '',
    });
  }

  // pushing records and counting active days
  let activeDays = 0;
  let j = firstDay;
  for (let i = 0; i < userMonthData.length - 1; i++) {
    activeDays += 1;
    if (userMonthData[i].weight === '0') {
      fullMonth.push({
        date: j,
        weight: previousDayWeight,
      });
      j += 1;
    } else {
      fullMonth.push({
        date: j,
        weight: userMonthData[i].weight.toString(),
      });
      j += 1;
      previousDayWeight = userMonthData[i].weight.toString();
    }
  }

  // Pushing current day from selector to make it refresh on change
  fullMonth.push({
    date: today,
    weight: currentWeight,
  });

  // userMonthData.forEach(day => {
  //   activeDays += 1;
  //   if (day.weight === '0') {
  //     fullMonth.push({
  //       date: j,
  //       weight: previousDayWeight,
  //     });
  //     j += 1;
  //   } else {
  //     fullMonth.push({
  //       date: j,
  //       weight: day.weight.toString(),
  //     });
  //     j += 1;
  //     previousDayWeight = day.weight.toString();
  //   }
  // });

  // Again pushing empty record till the end of month
  for (let i = today + 1; i <= props.numberOfDaysInMonth; i++) {
    fullMonth.push({
      date: i,
      weight: '',
    });
  }

  const average = Math.floor(
    fullMonth.reduce((acc, day) => (acc += Number(day.weight)), 0) / activeDays
  );

  // console.log('full month', fullMonth);
  return (
    <>
      <div className={css.blockHeading}>
        <p className={css.blockHeadingText}>Weight</p>
        <p className={css.blockAverageValue}>
          Average value:{' '}
          <span className={css.blockAverageValueSpan}>
            {average ? average : 0} kg
          </span>
        </p>
      </div>
      <div className={css.WeightDashboardContainer}>
        <ul className={css.weightDashboardList}>
          {fullMonth.map(day => {
            return (
              <li key={day.date}>
                <p className={css.weightDashboardKg}>{day.weight}</p>
                <p className={css.weightDashboardDate}>{day.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WeightMonthChart;
