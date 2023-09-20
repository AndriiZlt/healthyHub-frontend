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
import LogoutModal from './LogoutModal/LogoutModal';
import WeightModal from './WeightModal/WeightModal';
import Target from 'components/Target/SelectTarget';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isMobile = useMediaQuery('(max-width:833px)');

  const { avatarURL, name, goal, weight } = useSelector(authSelectors.getUser);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  function closeButton() {
    setShowDropdown(false);
  }
  function openButton() {
    setShowDropdown(true);
  }
  function closeModal() {
    setShowSetting(false);
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
          {isMobile && (
            <Dropdown show={showDropdown} onToggle={e => setShowDropdown(e)}>
              <Dropdown.Toggle className={css.button} />
              <Dropdown.Menu className={`${css.modal} ${css.mobile_modal}`}>
                <MobileAction closeButton={closeButton} />
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Logo />
          <div className={css.header_action}>
            {isMobile ? (
              <>
                <button className={css.button} onClick={openButton}>
                  <img src={menu} alt="menu" />
                </button>
              </>
            ) : (
              <>
                <Dropdown>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image="https://i.ibb.co/T8wdLSc/Lose-fat.png"
                      title="Goal"
                      text={goal}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${css.modal} ${css.width_modal}`}>
                    <Target />
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image="https://i.ibb.co/y5LpgvL/Waight-image.png"
                      title="Weight"
                      text={weight}
                      subtext="kg"
                      editIcon={true}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${css.modal} ${css.width_modal}`}>
                    <WeightModal />
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}

            <Dropdown
              show={showSetting}
              onToggle={e => setShowSetting(e)}
              align="end"
            >
              <Dropdown.Toggle className={css.button}>
                <ButtonDropDown
                  image={avatarURL}
                  text={name}
                  userAction={true}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className={css.modal}>
                <LogoutModal closeModal={closeModal} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
