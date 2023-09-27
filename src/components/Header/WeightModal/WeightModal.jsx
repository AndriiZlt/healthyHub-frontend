import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import useMediaQuery from 'helpers/useMediaQuery';
import authSelectors from 'redux/auth/auth-selectors';
import mealsSelectors from 'redux/meals/meals-selectors';
import authOperations from 'redux/auth/auth-operations';
import close from '../../../assets/close-circle.svg';
import css from './WeightModal.module.css';
import { Notify } from 'notiflix';

function WeightModal({ closeWeightModal, closeWeightMobileModal }) {
  const dispatch = useDispatch();
  const weightRef = useRef();
  const isMobile = useMediaQuery('(max-width:833px)');
  const [weightValue, setWeightValue] = useState('');

  const {
    name,
    goal,
    gender,
    age,
    height,
    weight,
    activity,
    token,
    avatarURL,
  } = useSelector(authSelectors.getUser);

  const { isChanged } = useSelector(mealsSelectors.getCurrentDay);

  function handleSubmit(evt) {
    evt.preventDefault();

    if (Number(weightValue) < 30) {
      setWeightValue('');
      Notify.failure('Minimum weight is 30kg');
      return;
    }

    const value = weightRef.current.value;

    dispatch(
      authOperations.saveSettings2({
        token,
        goal,
        avatarURL,
        setting: {
          ...{ name, gender, age, height, weight, activity },
          weight: value,
        },
      })
    );
    isMobile ? closeWeightMobileModal() : closeWeightModal();
    const form = evt.target;
    form.reset();
  }

  const changeHandler = e => {
    if (e.target.value === '0' || e.target.value === '') {
      setWeightValue('');
    } else {
      const value2 = Math.max(0, Math.min(500, Number(e.target.value)));
      setWeightValue(value2);
    }
  };

  let today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = dd + '.' + mm + '.' + yyyy;

  return (
    <div className={css.modal}>
      <div className={css.titles}>
        <h2 className={css.title}>Enter your current weight</h2>
        <p className={css.subtitle}>You can record your weight once a day</p>
      </div>
      <p className={css.today}>
        Today <span className={css.date}>{today}</span>
      </p>

      {!isChanged ? (
        <form type="submit" onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            placeholder="Enter your weight"
            type="number"
            ref={weightRef}
            max={500}
            min={0}
            value={weightValue}
            onChange={changeHandler}
          />
          <button className={css.button}>Confirm</button>
        </form>
      ) : (
        <p>
          You have already recorded your weight today. Please try again
          tomorrow.
        </p>
      )}

      {isMobile ? (
        <button onClick={closeWeightMobileModal} className={css.close_mobile}>
          Cancel
        </button>
      ) : (
        <button onClick={closeWeightModal} className={css.close}>
          <img src={close} alt="close" />
        </button>
      )}
    </div>
  );
}
export default WeightModal;
