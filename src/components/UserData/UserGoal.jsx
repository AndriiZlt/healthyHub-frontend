import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/userGoal.svg';
import css from './UserGoal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';
import authSelectors from 'redux/auth/auth-selectors';

const UserGoal = () => {
  const { goal } = useSelector(authSelectors.getRegData);
  const [goal2, setGoal2] = useState(goal || 'Lose Fat');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setGoal2(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(setRegData({ goal: goal2 }));
    navigate('/usergender');
  };

  const Goal = {
    FIRST: 'Lose Fat',
    SECOND: 'Maintain',
    THIRD: 'Gain Muscle',
  };

  return (
    <div className={css.goalContainer}>
      <img alt="Summer hiking" src={Image} className={css.goalImg} />
      <div className={css.goalInfoContainer}>
        <h2 className={css.goalTitle}>Your goal</h2>
        <p className={css.goalText}>
          Choose a goal so that we can help you effectively
        </p>
        <form className={css.goalForm} onSubmit={formSubmit}>
          <label className={css.goalFormText}>
            <input
              className={css.goalFormRadio}
              onChange={handleChange}
              type="radio"
              name="goal"
              value={Goal.FIRST}
              checked={goal2 === 'Lose Fat'}
            />
            <span className={css.customCheked}></span>
            Lose Fat
          </label>
          <label className={css.goalFormText}>
            <input
              className={css.goalFormRadio}
              onChange={handleChange}
              type="radio"
              name="goal"
              value={Goal.SECOND}
              checked={goal2 === 'Maintain'}
            />
            <span className={css.customCheked}></span>
            Maintain
          </label>
          <label className={css.goalFormText}>
            <input
              className={css.goalFormRadio}
              onChange={handleChange}
              type="radio"
              name="goal"
              value={Goal.THIRD}
              checked={goal2 === 'Gain Muscle'}
            />
            <span className={css.customCheked}></span>
            Gain Muscle
          </label>
          <button type="submit" className={css.goalButton}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserGoal;
