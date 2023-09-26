import React from 'react';
import css from './Dashboard.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import dayjs from 'dayjs'; // eslint-disable-line

const WeightMonthChart = props => {
  const userMonthData = [...props.userMonthData];
  const { weight } = useSelector(authSelectors.getUser);
  let previousDayWeight = weight || null;

  // Getting current day
  const today = Number(dayjs(new Date()).format('DD'));

  const fullMonth = [];
  for (let i = 1; i <= props.numberOfDaysInMonth; i++) {
    // Making sure the day exist
    let found = false;
    let index = 0;
    if (i <= userMonthData.length) {
      for (let j = 0; j < i; j++) {
        if (!found) {
          if (Number(userMonthData[j].date) === i) {
            index = j;
            found = true;
          }
        }
      }
    }

    if (!found) {
      if (i > today) {
        fullMonth.push({
          date: i,
          weight: '',
        });
      } else {
        fullMonth.push({
          date: i,
          weight: previousDayWeight,
        });
      }
    } else {
      fullMonth.push({
        date: i,
        weight: userMonthData[index].weight.toString(),
      });
      previousDayWeight = userMonthData[index].weight;
    }
  }

  const average = Math.floor(
    fullMonth.reduce((acc, day) => (acc += Number(day.weight)), 0) /
      Number(today)
  );

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
