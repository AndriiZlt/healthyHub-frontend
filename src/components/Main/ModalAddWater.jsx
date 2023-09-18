import React from 'react';
import css from './modals.module.css';

const ModalAddWater = () => {
  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}>
        <div className={css.divPadding}>
          <h2 className={css.sizeH2}>Add water intake</h2>
          <div className={css.divForm}>
            <h3 className={css.sizeH3}>How much water</h3>
          </div>

          <form id="meal-form">
            <div className={css.formGroup}>
              <input
                type="number"
                id="carbohydrates"
                name="carbohydrates"
                placeholder="Enter milliliters"
                required
              />
            </div>
            <div className={css.formGroup}>
              <button type="button" id="add-more">
                Confirm
              </button>
            </div>
            <div className={css.formGroup}>
              <button type="button" id="cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddWater;
