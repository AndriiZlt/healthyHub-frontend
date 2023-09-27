import React, { useEffect, useState } from 'react';
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
import dashboardMonthHelper from 'helpers/dashboardMonthHelper';
import { useDispatch, useSelector } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import dashboardYearHelper from 'helpers/useYearHelper';
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

const Dashboard = () => {
  const [time, setTime] = useState('month');
  const [timeToggleHidden, setTimeToggleHidden] = useState(true);
  const [isMonthLoading, setIsMonthLoading] = useState(false);
  const [isYearLoading, setIsYearLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsMonthLoading(true);
    setIsYearLoading(true);
    (async () => {
      dispatch(mealsOperations.fetchMonth()).then(() => {
        setIsMonthLoading(false);
        dispatch(mealsOperations.fetchYear()).then(() => {
          setIsYearLoading(false);
        });
      });
    })();
  }, [dispatch]);

  const month = useSelector(mealsSelectors.getMonth); // eslint-disable-line
  const year = useSelector(mealsSelectors.getYear); // eslint-disable-line

  let userMonthData = null;

  if (month) {
    userMonthData = dashboardMonthHelper(month);
  }

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
          month ? (
            <CaloriesMonthChart
              isMonthLoading={isMonthLoading}
              time={time}
              numberOfDaysInMonth={daysInMonth}
              userMonthData={userMonthData}
            />
          ) : (
            <>Loading...</>
          )
        ) : !isYearLoading ? (
          <CaloriesYearChart
            isYearLoading={isYearLoading}
            time={time}
            daysInMonth={daysInMonth}
            currentMonth={currentMonth}
          />
        ) : (
          <>Loading...</>
        )}

        {time === 'month' ? (
          month ? (
            <WaterMonthChart
              isMonthLoading={isMonthLoading}
              time={time}
              numberOfDaysInMonth={daysInMonth}
              userMonthData={userMonthData}
            />
          ) : (
            <>Loading...</>
          )
        ) : !isYearLoading ? (
          <WaterYearChart
            isYearLoading={isYearLoading}
            time={time}
            numberOfDaysInMonth={daysInMonth}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={css.weightBlock}>
        {time === 'month' ? (
          month ? (
            <WeightMonthChart
              isMonthLoading={isMonthLoading}
              time={time}
              numberOfDaysInMonth={daysInMonth}
              userMonthData={userMonthData}
            />
          ) : (
            <div>Loading...</div>
          )
        ) : !isYearLoading ? (
          <WeightYearChart
            isYearLoading={isYearLoading}
            time={time}
            numberOfDaysInMonth={daysInMonth}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
