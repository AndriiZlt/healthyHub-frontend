import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrowBackPath from '../../assets/Dashboard/arrow-left.svg';
import arrowDownPath from '../../assets/Dashboard/arrow-down.svg';
import CaloriesMonthChart from './CaloriesMonthChart';
import CaloriesYearChart from './CaloriesYearChart';
import WaterMonthChart from './WaterMonthChart';
import WaterYearChart from './WaterYearChart';
import WeightMonthChart from './WeightMonthChart';
import WeightYearChart from './WeightYearChart';
import css from './Dashboard.module.css';
import useDashboardMonth from 'helpers/useDashboardMonth';

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

const Dashboard = () => {
  const userMonthData = useDashboardMonth();
  const [time, setTime] = useState('month');
  const [timeToggleHidden, setTimeToggleHidden] = useState(true);

  const date = new Date();

  const currentMonth = date.getMonth() + 1;

  const currentYear = date.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const handleDateQueryButtonClick = () => {
    setTimeToggleHidden(!timeToggleHidden);
  };

  const handleToggleDashboardTime = () => {
    setTimeToggleHidden(true);
    setTime(prevTime => (prevTime === 'month' ? 'year' : 'month'));
  };

  return (
    <section className={css.dashboardSection}>
      <div className={css.dashboardHeading}>
        <div className={css.dashboardDateQuery}>
          <button className={css.goBackButton}>
            <NavLink to="/main" className={css.goBackButtonLink}>
              <img
                src={arrowBackPath}
                alt="arrow back"
                className={css.arrowBack}
              />
            </NavLink>
          </button>
          <div className={css.dateQueryContainer}>
            <div className={css.dateQuery}>
              <p className={css.dateQueryText}>Last {time}</p>
              {!timeToggleHidden && (
                <button
                  className={css.dateQuerySecondaryButton}
                  onClick={handleToggleDashboardTime}
                >
                  Last {time === 'month' ? 'year' : 'month'}
                </button>
              )}
              <button
                className={css.dateQueryButton}
                onClick={handleDateQueryButtonClick}
              >
                <img
                  src={arrowDownPath}
                  alt="arrow up"
                  className={css.arrowDown}
                  style={{
                    transform: !timeToggleHidden
                      ? 'rotate(0deg)'
                      : 'rotate(180deg)',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <p className={css.dashboardMonth}>
          {time === 'month' ? monthNames[currentMonth - 1] : currentYear}
        </p>
      </div>
      <div className={css.dashboardBlockContent}>
        {time === 'month' ? (
          <CaloriesMonthChart
            time={time}
            numberOfDaysInMonth={daysInMonth}
            userMonthData={userMonthData}
          />
        ) : (
          <CaloriesYearChart
            time={time}
            daysInMonth={daysInMonth}
            currentMonth={currentMonth}
            // userYearData={userYearData}
          />
        )}

        {time === 'month' ? (
          <WaterMonthChart
            time={time}
            numberOfDaysInMonth={daysInMonth}
            userMonthData={userMonthData}
          />
        ) : (
          <WaterYearChart
            time={time}
            numberOfDaysInMonth={daysInMonth}
            userMonthData={userMonthData}
          />
        )}
      </div>
      <div className={css.weightBlock}>
        {time === 'month' ? (
          <WeightMonthChart
            time={time}
            numberOfDaysInMonth={daysInMonth}
            userMonthData={userMonthData}
          />
        ) : (
          <WeightYearChart
            time={time}
            numberOfDaysInMonth={daysInMonth}
            userMonthData={userMonthData}
          />
        )}
      </div>
    </section>
  );
};

export default Dashboard;
