import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/userActivity.svg';
import css from './UserActivity.module.css';

const UserActivity = () => {
  const [value, setValue] = useState();

  //   handleChange = evt => {
  //     const { name, value, type, checked } = evt.target;
  //     // Якщо тип елемента – checkbox, беремо значення checked,
  //     // в іншому випадку – value
  //     this.setState({ [name]: type === 'checkbox' ? checked : value });

  const Activity = {
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
    FOURTH: 'fourth',
    FIFTH: 'fifth',
  };

  return (
    <div className={css.activityContainer}>
      <img alt="Summer hiking" src={Image} className={css.activityImg} />
      <div className={css.activityInfoContainer}>
        <h2 className={css.activityTitle}>Your Activity</h2>
        <p className={css.activityText}>
          To correctly calculate calorie and water intake
        </p>
        <form className={css.activityForm}>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              type="radio"
              name="activity"
              value={Activity.FIRST}
              defaultChecked
            />
            <span className={css.customCheked}></span>
            1.2 - if you do not have physical activity and sedentary work
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              type="radio"
              name="activity"
              value={Activity.SECOND}
            />
            <span className={css.customCheked}></span>
            1,375 - if you do short runs or light gymnastics 1-3 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              type="radio"
              name="activity"
              value={Activity.THIRD}
            />
            <span className={css.customCheked}></span>
            1.55 - if you play sports with average loads 3-5 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              type="radio"
              name="activity"
              value={Activity.FOURTH}
            />
            <span className={css.customCheked}></span>
            1,725 ​​- if you train fully 6-7 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              type="radio"
              name="activity"
              value={Activity.FIFTH}
            />
            <span className={css.customCheked}></span>
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </label>

          <button type="button" className={css.activityButton}>
            Next
          </button>
        </form>
        <Link to="/userbody" className={css.activityLinkBack}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default UserActivity;
