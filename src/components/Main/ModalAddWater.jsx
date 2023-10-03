import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './AddWater.module.css';
import { useDispatch } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import { setModalsOff } from 'redux/meals/meals-slice';
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import mealsSelectors from 'redux/meals/meals-selectors';

const ModalAddWater = () => {
  const openModal = useSelector(mealsSelectors.getModalWaterOn);
  
  const [water, setWater] = useState('');
  const dispatch = useDispatch();

  Notiflix.Notify.init({
    zindex: 9999999,
  });

  const confirmHandler = () => {
    if (water === '') {
      Notify.warning('Fill in all fields!');
      return;
    }
    (async () => {
      dispatch(mealsOperations.waterIntake({ water })).then(() => {
        Notify.success('Water intake recorded!');
        dispatch(mealsOperations.fetchDay());
      });
    })();
    dispatch(setModalsOff());
    // }
  };

  const enterPressHandler = e => {
    if (e.key === 'Enter') {
      confirmHandler();
    }
  };

  return (
    <div className={css.overlay} id="overlay">
      <div className={`${css.modal} ${openModal ? css.show : ''}`}>
        <h2 className={css.titleH2}>Add water intake</h2>
        <div className={css.media}>
          <h3 className={css.titleH3}>How much water</h3>
          <input
            className={css.input}
            type="number"
            id="water"
            name="water"
            placeholder="Enter milliliters"
            value={water}
            onChange={e => setWater(e.target.value)}
            max="9999"
            min="1"
            onKeyDown={enterPressHandler}
          />
          <button
            className={css.confirmButton}
            type="button"
            id="add-more"
            onClick={confirmHandler}
          >
            Confirm
          </button>
          <button className={css.cancelButton} type="button" id="cancelWater">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddWater;
