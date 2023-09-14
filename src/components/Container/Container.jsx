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
      setWidth(1372);
      setPadding(34);
    } else {
      if (isTablet) {
        setWidth(780);
        setPadding(27);
      } else {
        setWidth(300);
        setPadding(10);
      }
    }
  }, [isDesktop, isTablet]);

  return (
    <div
      style={{
        width: width,
        outline: 1,
        outlineColor: 'grey',
        outlineStyle: 'solid',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: padding,
        paddingRight: padding,
      }}
      className={css.Container}
    >
      {children}
    </div>
  );
};

export default Container;
