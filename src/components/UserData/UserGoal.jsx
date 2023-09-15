import React, { useState } from 'react';
import Image from './userGoal-mobile.svg';
import radioCheked from './radioCheked.svg';
import css from './UserData.module.css';

const UserGoal = () => {
  const [value, setValue] = useState();

  //   handleChange = evt => {
  //     const { name, value, type, checked } = evt.target;
  //     // Якщо тип елемента – checkbox, беремо значення checked,
  //     // в іншому випадку – value
  //     this.setState({ [name]: type === 'checkbox' ? checked : value });

  const Goal = {
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
  };

  return (
    <div className={css.goalContainer}>
      <img alt="Summer hiking" src={Image} className={css.goalImg} />
      <h2 className={css.goalTitle}>Your goal</h2>
      <p className={css.goalText}>
        Choose a goal so that we can help you effectively
      </p>
      <form className={css.goalForm}>
        <label className={css.goalFormText}>
          <input
            className={css.goalFormRadio}
            type="radio"
            name="goal"
            value={Goal.FIRST}
            defaultChecked
          />
          <span className={css.customCheked}></span>
          Lose Fat
        </label>
        <label className={css.goalFormText}>
          <input
            className={css.goalFormRadio}
            type="radio"
            name="goal"
            value={Goal.SECOND}
          />
          <span className={css.customCheked}></span>
          Maintain
        </label>
        <label className={css.goalFormText}>
          <input
            className={css.goalFormRadio}
            type="radio"
            name="goal"
            value={Goal.SECOND}
          />
          <span className={css.customCheked}></span>
          Gain Muscle
        </label>
        <button className={css.goalButton}>Next</button>
      </form>
    </div>
  );
};

export default UserGoal;
