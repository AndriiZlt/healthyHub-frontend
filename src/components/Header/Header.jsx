import React from 'react';
import css from './Header.module.css';
import logo from '../../assets/HealthyHub.svg';
import profile from '../../assets/profile-circle.svg';

const Header = () => {
  return (
    <div className={css.header}>
      <img className={css.logo} src={logo} alt="logo"></img>

      <div className={css.auth}>
        <div className={css.sign}>
          <a href="a">Sign in</a>
          <p> / </p>
          <a href="a" lassName={css.link}>
            Sign up
          </a>
        </div>

        <img className={css.profile} src={profile} alt="profile"></img>
      </div>
    </div>
  );
};

export default Header;
