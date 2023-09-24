// import React from 'react';
// import { useDispatch } from 'react-redux';
// import mealsOperations from 'redux/meals/meals-operations';

// const TestIrina = () => {
//   const dispatch = useDispatch();
//   setTimeout(() => dispatch(mealsOperations.fetchYear()), 3000);

//   return <div>skjdsak</div>;
// };

// export default TestIrina;


import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from './TestIrina.module.css';

const DoughnutChart = () => {
  const dailyCalories = 2000;
  const intakeCalories = 1360;
  const percentage = intakeCalories/dailyCalories*100;

  return (
    <div>
      <div className={css.progressbar}>
        <CircularProgressbar
        value={percentage}
        text = { ` ${ percentage } %` }
        styles={buildStyles({
          // textSize: '14px',
          pathColor: '#FFC4F7',
          textColor: '#B6B6B6',
          trailColor: '#292928',
          backgroundColor: '#3e98c7',
          strokeWidth: 10,
        })}
      />
      </div>
      
      
      <div className={css.progressbarBig}>
        <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
          // textSize: '14px',
          pathColor: '#45FFBC',
          textColor: '#B6B6B6',
          trailColor: '#292928',
          backgroundColor: '#3e98c7',
          strokeWidth: 10,
        })}
        >
          <div className={css.info} >
            <p className={css.number}>{intakeCalories}</p>
            <p className={css.calories}>calories</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      
    </div>
  );
}

export default DoughnutChart;
