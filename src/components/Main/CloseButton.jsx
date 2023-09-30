import React from 'react';
import css from './CloseButton.module.css';

const CloseButton = () => {
  return (
    <div className={css.closeContainer}>
      <div className={css.leftright}></div>
      <div className={css.rightleft}></div>
    </div>
  );
};

export default CloseButton;
