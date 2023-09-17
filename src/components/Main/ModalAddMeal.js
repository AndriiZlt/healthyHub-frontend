import React from 'react';
import css from './Main.module.css';

const ModalAddMeal = () => {
  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}></div>
    </div>
  );
};

export default ModalAddMeal;
