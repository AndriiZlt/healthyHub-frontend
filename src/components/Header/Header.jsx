//import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import css from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import useMediaQuery from 'hooks/useMediaQuery';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonDropDown from './ButtonDropDown/ButtonDropDown';
import menu from '../../assets/menu.svg';
// import authSelectors from 'redux/auth/auth-selectors'

const Header = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log("qwe",isLoggedIn)
  const isMobile = useMediaQuery('(max-width:833px)');
  const isLoggedIn = true;

  return (
    <div className={css.header}>
      {!isLoggedIn ? (
        <>
          <Logo />
          <Navigation />
        </>
      ) : (
        <>
          <Logo />
          <div className={css.header_action}>
            {isMobile ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle className={css.button}>
                    <img src={menu} alt="menu" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={css.modal}>TADAM</Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Dropdown>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image="https://i.ibb.co/T8wdLSc/Lose-fat.png"
                      title="Goal"
                      text="Lose fat"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={css.modal}>TADAM</Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image="https://i.ibb.co/y5LpgvL/Waight-image.png"
                      title="Weight"
                      text="65"
                      subtext="kg"
                      editIcon={true}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={css.modal}>TADAM</Dropdown.Menu>
                </Dropdown>
              </>
            )}

            <Dropdown align="end">
              <Dropdown.Toggle className={css.button}>
                <ButtonDropDown
                  image="https://i.ibb.co/Qj72cs1/among-us.png"
                  text="Konstantin"
                  userAction={true}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className={css.modal}>TADAM</Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
