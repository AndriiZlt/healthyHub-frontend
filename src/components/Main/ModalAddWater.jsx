import React, { useState } from 'react';
import css from './AddWater.module.css';
import { useDispatch } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';

const ModalAddWater = () => {
  const [water, setWater] = useState('');
  const dispatch = useDispatch();

  const confirmHandler = () => {
    if (water !== '') {
      dispatch(mealsOperations.waterIntake({ water }));
    }
  };

  const enterPressHandler = e => {
    if (e.key === 'Enter') {
      confirmHandler();
    }
  };

  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}>
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
          <button className={css.cancelButton} type="button" id="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddWater;
