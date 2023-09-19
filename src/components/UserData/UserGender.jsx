import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../assets/userGender.svg';
import css from './UserGender.module.css';
import { useDispatch } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';

const UserGender = () => {
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeGender = evt => {
    setGender(evt.target.value);
  };

  const handleChangeAge = evt => {
    setAge(evt.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    navigate('/userbody');
    dispatch(setRegData({ gender, age }));
  };

  const Gender = {
    MALE: 'Male',
    FEMALE: 'Female',
  };

  return (
    <div className={css.genderContainer}>
      <img
        alt="Illustration gender and age"
        src={Image}
        className={css.genderImg}
      />
      <div className={css.genderInfoContainer}>
        <h2 className={css.genderTitle}>Select gender, Age</h2>
        <p className={css.genderText}>
          Choose a goal so that we can help you effectively
        </p>
        <form className={css.genderForm} onSubmit={formSubmit}>
          <p className={css.genderFormName}>Gender</p>

          <label className={css.genderLabelMale}>
            <input
              className={css.genderFormRadio}
              onChange={handleChangeGender}
              type="radio"
              name="gender"
              value={Gender.MALE}
              defaultChecked
            />
            <span className={css.customCheked}></span>
            Male
          </label>
          <label className={css.genderLabelFemale}>
            <input
              className={css.genderFormRadio}
              onChange={handleChangeGender}
              type="radio"
              name="gender"
              value={Gender.FEMALE}
            />
            <span className={css.customCheked}></span>
            Female
          </label>

          <label htmlFor="user_age" className={css.genderLabelAge}>
            Your age
          </label>
          <input
            className={css.genderInputAge}
            onChange={handleChangeAge}
            id="user_age"
            type="number"
            value={age}
            placeholder="Enter your age"
          />

          <button className={css.genderButton} type="submit" disabled={!age}>
            Next
          </button>
        </form>

        <Link to="/usergoal" className={css.genderLinkBack}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default UserGender;
