import css from './Container.module.css';
import React from 'react';

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
