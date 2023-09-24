import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../assets/userActivity.svg';
import css from './UserActivity.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { setLoadingTrue } from 'redux/auth/auth-slice';

const UserActivity = () => {
  const { activity } = useSelector(authSelectors.getRegData);
  const navigate = useNavigate();
  const [activity2, setActivity2] = useState(activity || '1.2');
  const [submited, setSubmited] = useState(false);
  const credentials = useSelector(authSelectors.getRegData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (submited) {
      dispatch(setLoadingTrue());
      dispatch(authOperations.register(credentials));
      setSubmited(false);
      navigate('/main');
    }
  }, [credentials, dispatch, navigate, submited]);

  const handleChange = e => {
    setActivity2(e.target.value);
    dispatch(setRegData({ activity: e.target.value }));
  };

  const formSubmit = async e => {
    e.preventDefault();
    dispatch(setRegData({ activity: activity2 }));
    dispatch(setLoadingTrue());

    setSubmited(true);
  };

  const Activity = {
    FIRST: 1.2,
    SECOND: 1.375,
    THIRD: 1.55,
    FOURTH: 1.725,
    FIFTH: 1.9,
  };

  return (
    <div className={css.activityContainer}>
      <img alt="Summer hiking" src={Image} className={css.activityImg} />
      <div className={css.activityInfoContainer}>
        <h2 className={css.activityTitle}>Your Activity</h2>
        <p className={css.activityText}>
          To correctly calculate calorie and water intake
        </p>
        <form className={css.activityForm} onSubmit={formSubmit}>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              onChange={handleChange}
              type="radio"
              name="activity"
              value={Activity.FIRST}
              checked={activity2 === Activity.FIRST.toString()}
            />
            <span className={css.customCheked}></span>
            1.2 - if you do not have physical activity and sedentary work
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              onChange={handleChange}
              type="radio"
              name="activity"
              value={Activity.SECOND}
              checked={activity2 === Activity.SECOND.toString()}
            />
            <span className={css.customCheked}></span>
            1,375 - if you do short runs or light gymnastics 1-3 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              onChange={handleChange}
              type="radio"
              name="activity"
              value={Activity.THIRD}
              checked={activity2 === Activity.THIRD.toString()}
            />
            <span className={css.customCheked}></span>
            1.55 - if you play sports with average loads 3-5 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              onChange={handleChange}
              type="radio"
              name="activity"
              value={Activity.FOURTH}
              checked={activity2 === Activity.FOURTH.toString()}
            />
            <span className={css.customCheked}></span>
            1,725 ​​- if you train fully 6-7 times a week
          </label>
          <label className={css.activityFormText}>
            <input
              className={css.activityFormRadio}
              onChange={handleChange}
              type="radio"
              name="activity"
              value={Activity.FIFTH}
              checked={activity2 === Activity.FIFTH.toString()}
            />
            <span className={css.customCheked}></span>
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </label>

          <button type="submit" className={css.activityButton}>
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
