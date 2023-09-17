import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../assets/userBody.svg';
import css from './UserBody.module.css';

const UserBody = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const navigate = useNavigate();

  const handleChangeHeight = evt => {
    setHeight(evt.target.value);
  };

  const handleChangeWeight = evt => {
    setWeight(evt.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(`Height: ${height}, Weight: ${weight}`);

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
            value={height}
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
            value={weight}
            onChange={handleChangeWeight}
            placeholder="Enter your weight"
          ></input>

          <button
            className={css.bodyButton}
            type="submit"
            disabled={!height || !weight}
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
