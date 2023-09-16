import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/userBody.svg';
import css from './UserBody.module.css';

const UserBody = () => {
  return (
    <div className={css.bodyContainer}>
      <img alt="Body parameters" src={Image} className={css.bodyImg} />
      <h2 className={css.bodyTitle}>Body parameters</h2>
      <p className={css.bodyText}>
        Enter your parameters for correct performance tracking
      </p>
      <form className={css.bodyForm}>
        <label for="user_height" className={css.bodyFormText}>
          Height
        </label>
        <input
          id="user_height"
          type="number"
          placeholder="Enter your height"
          className={css.bodyFormInput}
        ></input>
        <label for="user_weight" className={css.bodyFormText}>
          Weight
        </label>
        <input
          id="user_weight"
          type="number"
          placeholder="Enter your weight"
          className={css.bodyFormInput}
        ></input>

        <button className={css.bodyButton} type="submit">
          Next
        </button>
      </form>

      <Link to="/usergender" className={css.bodyLinkBack}>
        Back
      </Link>
    </div>
  );
};

export default UserBody;
