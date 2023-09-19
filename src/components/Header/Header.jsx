import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import useMediaQuery from 'helpers/useMediaQuery';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonDropDown from './ButtonDropDown/ButtonDropDown';
import menu from '../../assets/menu.svg';
import authSelectors from 'redux/auth/auth-selectors';
import MobileAction from './MobileAction/MobileAction';
import LogoutModal from './LogoutModal/LogoutModal'

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const data = useSelector(authSelectors.getRegData);
  // console.log(data);
  const isMobile = useMediaQuery('(max-width:833px)');

  const [showDropdown, setShowDropdown] = useState(false);
  function closeButton() {
    setShowDropdown(false);
  }
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
                <Dropdown
                  show={showDropdown}
                  onToggle={e => setShowDropdown(e)}
                >
                  <Dropdown.Toggle className={css.button}>
                    <img src={menu} alt="menu" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${css.modal} ${css.mobile_modal}`}>
                    <MobileAction closeButton={closeButton} />
                  </Dropdown.Menu>
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
              <Dropdown.Menu className={css.modal}><LogoutModal/></Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
