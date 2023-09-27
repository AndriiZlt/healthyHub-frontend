import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../assets/userBody.svg';
import css from './UserBody.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';
import authSelectors from 'redux/auth/auth-selectors';
import { Notify } from 'notiflix';

const UserBody = () => {
  const { height, weight } = useSelector(authSelectors.getRegData);
  const [height2, setHeight2] = useState(height || '');
  const [weight2, setWeight2] = useState(weight || '');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeHeight = evt => {
    if (evt.target.value === '0' || evt.target.value === '') {
      setHeight2('');
    } else {
      const value = Math.max(0, Math.min(251, Number(evt.target.value)));
      setHeight2(value);
    }
    // dispatch(setRegData({ height: evt.target.value }));
  };

  const handleChangeWeight = evt => {
    if (evt.target.value === '0' || evt.target.value === '') {
      setWeight2('');
    } else {
      const value = Math.max(0, Math.min(500, Number(evt.target.value)));
      setWeight2(value);
    }
    // dispatch(setRegData({ weight: evt.target.value }));

  };

  const formSubmit = e => {
    e.preventDefault();
    if (Number(height2) < 60) {
      setHeight2('');
      Notify.failure('Minimum height is 60cm');
      return;
    } else if (Number(weight2) < 30) {
      setWeight2('');
      Notify.failure('Minimum weight is 30kg');
      return;
    }

    dispatch(
      setRegData({ height: height2.toString(), weight: weight2.toString() })
    );

    navigate('/useractivity');
  };

  return (
    <div className={css.bodyContainer}>
      <img alt="Body parameters" src={Image} className={css.bodyImg} />
      <div className={css.BodyInfoContainer}>
        <h2 className={css.bodyTitle}>Body parameters</h2>
        <p className={css.bodyText}>
          Enter your parameters for correct performance tracking
        </p>
        <form className={css.bodyForm} onSubmit={formSubmit}>
          <label htmlFor="user_height" className={css.bodyFormText}>
            Height
          </label>
          <input
            className={css.bodyFormInput}
            id="user_height"
            type="number"
            name="height"
            value={height2}
            onChange={handleChangeHeight}
            placeholder="Enter your height"
          ></input>
          <label htmlFor="user_weight" className={css.bodyFormText}>
            Weight
          </label>
          <input
            className={css.bodyFormInput}
            id="user_weight"
            type="number"
            name="weight"
            value={weight2}
            onChange={handleChangeWeight}
            placeholder="Enter your weight"
          ></input>

          <button
            className={css.bodyButton}
            type="submit"
            disabled={!height2 || !weight2}
          >
            Next
          </button>
        </form>

        <Link to="/usergender" className={css.bodyLinkBack}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default UserBody;
