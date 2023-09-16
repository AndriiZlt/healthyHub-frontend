import css from './Container.module.css';
import React, { useEffect, useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';

const Container = ({ children }) => {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');

  const [width, setWidth] = useState(300);
  const [padding, setPadding] = useState(10);

  useEffect(() => {
    if (isDesktop) {
      setWidth(1440);
      setPadding(34);
    } else {
      if (isTablet) {
        setWidth(834);
        setPadding(27);
      } else {
        setWidth(320);
        setPadding(10);
      }
    }
  }, [isDesktop, isTablet]);

  return (
    <div>
      <div
        style={{
          width: width,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: padding,
          paddingRight: padding,
          boxSizing: 'border-box',
        }}
        className={css.Container}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
