import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/userGender.svg';
import css from './UserGender.module.css';

const UserGender = () => {
  // const [value, setValue] = useState();

  const Gender = {
    MALE: 'male',
    FEMALE: 'female',
  };

  return (
    <div className={css.genderContainer}>
      <img alt="Summer hiking" src={Image} className={css.genderImg} />
      <h2 className={css.genderTitle}>Select gender, Age</h2>
      <p className={css.genderText}>
        Choose a goal so that we can help you effectively
      </p>
      <form className={css.genderForm}>
        <p className={css.genderFormName}>Gender</p>

        <label className={css.genderFormText}>
          <input
            className={css.genderFormRadio}
            type="radio"
            name="gender"
            value={Gender.MALE}
            defaultChecked
          />
          <span className={css.customCheked}></span>
          Male
        </label>
        <label className={css.genderFormText}>
          <input
            className={css.genderFormRadio}
            type="radio"
            name="gender"
            value={Gender.FEMALE}
          />
          <span className={css.customCheked}></span>
          Female
        </label>

        <label for="user_age" className={css.genderFormAge}>
          Your age
        </label>
        <input
          className={css.genderFormAgeInput}
          id="user_age"
          type="number"
          placeholder="Enter your age"
        />

        <button className={css.genderButton} type="submit">
          Next
        </button>
      </form>

      <Link to="/usergoal" className={css.genderLinkBack}>
        Back
      </Link>
    </div>
  );
};

export default UserGender;
