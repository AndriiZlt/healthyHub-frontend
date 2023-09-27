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
import TargetSelectionModal from './TargetSelectionModal/TargetSelectionModal';

import loseFat from '../../assets/loseFat.png';
import maintain from '../../assets/Maintain.png';
import gainMuscle from '../../assets/gainMuscle.png';
import weightImage from '../../assets/Weight.png'

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isMobile = useMediaQuery('(max-width:833px)');

  const { avatarURL, name, goal, weight } = useSelector(authSelectors.getUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showWeight, setWeight] = useState(false);
  const [showGoal, setShowGoal] = useState(false);

  function openButton() {
    setShowDropdown(true);
  }
  function closeButton() {
    setShowDropdown(false);
  }
  function closeModal() {
    setShowSetting(false);
  }
  function closeWeightModal() {
    setWeight(false);
  }
  function closeGoalModal() {
    setShowGoal(false);
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
              <Dropdown.Menu className={`${css.modal} ${css.mobile_modal} ${showDropdown ? css.show : ''}`}>
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
                <Dropdown show={showGoal} onToggle={e => setShowGoal(e)}>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image={goal==="Lose fat" ? loseFat : goal==="Maintain" ? maintain : gainMuscle}
                      title="Goal"
                      text={goal}
                      showGoal={showGoal}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${css.modal} ${css.width_modal} ${showGoal ? css.show : ''}`}>
                    <TargetSelectionModal closeGoalModal={closeGoalModal}/>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={showWeight} onToggle={e => setWeight(e)}>
                  <Dropdown.Toggle className={css.button}>
                    <ButtonDropDown
                      image={weightImage}
                      title="Weight"
                      text={weight}
                      subtext="kg"
                      editIcon={true}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${css.modal} ${css.width_modal} ${showWeight ? css.show : ''}`}>
                    <WeightModal closeWeightModal={closeWeightModal} />
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
                  showSetting={showSetting}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className={`${css.modal} ${css.logout} ${showSetting ? css.show : ''}`}>
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
