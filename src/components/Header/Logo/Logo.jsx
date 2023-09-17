import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/HealthyHub.svg';
import useMediaQuery from 'hooks/useMediaQuery';
import css from './Logo.module.css'

function Logo() {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');

  const [logoHeight, setLogoHeight] = useState(22);
  const [logoWidth, setLogoWidth] = useState(102);

  useEffect(() => {
    if (isDesktop) {
      setLogoHeight(32);
      setLogoWidth(140);
    } else {
      if (isTablet) {
        setLogoHeight(32);
        setLogoWidth(140);
      } else {
        setLogoHeight(22);
        setLogoWidth(102);
      }
    }
  }, [isDesktop, isTablet]);

  return (
    <NavLink className={css.logo} to="/">
      <img
        src={logo}
        alt="logo"
        style={{ height: logoHeight, width: logoWidth }}
      ></img>
    </NavLink>
  );
}
export default Logo;
