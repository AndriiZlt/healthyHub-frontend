import React, { useState } from 'react';
import css from './modals.module.css';

const ModalAddWater = () => {
  const [water, setWater] = useState('');
  const confirmHandler = () => {
    console.log(water);
    // setWater(e.target.value);
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
            required
            value={water}
            onChange={e => setWater(e.target.value)}
            max="9999"
            min="1"
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
