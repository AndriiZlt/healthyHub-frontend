import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import logo from '../../assets/HealthyHub.svg';
import profile from '../../assets/profile-circle.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');

  const [logoHeight, setLogoHeight] = useState(22);
  const [logoWidth, setLogoWidth] = useState(102);

  console.log('desktop:' + isDesktop, 'isTablet:' + isTablet);
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
    <div className={css.header}>
      <img
        src={logo}
        alt="logo"
        style={{ height: logoHeight, width: logoWidth }}
      ></img>

      <div className={css.auth}>
        <div className={css.sign}>
          <a href="a">Sign in</a>
          <p> / </p>
          <a href="a" className={css.link}>
            Sign up
          </a>
        </div>

        <img className={css.profile} src={profile} alt="profile"></img>
      </div>
    </div>
  );
};

export default Header;
