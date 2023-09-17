import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetails } from 'redux/auth/auth-slice';
import css from './Test.module.css';

const Test = () => {
  const [age, setAge] = useState('');
  //   const [password, setPassword] = useState('');
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(setDetails({ age }));
  };

  return (
    <div>
      <div>
        <form className={css.form} onSubmit={submitHandler}>
          <input
            value={age}
            placeholder="age"
            onChange={e => setAge(e.target.value)}
            className={css.input}
          ></input>
          {/* <input
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            className={css.input}
          ></input> */}
          <button type="submit" className={css.btn} onSubmit={submitHandler}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
