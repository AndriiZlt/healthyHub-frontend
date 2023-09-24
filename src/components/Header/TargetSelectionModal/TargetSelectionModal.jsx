import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import useMediaQuery from 'helpers/useMediaQuery';

import loseFat from '../../../assets/Lose_fats.png';
import maintain from '../../../assets/Maintake.png';
import gainMuscle from '../../../assets/Gain_muscle.png'
import close from '../../../assets/close-circle.svg';

import css from './TargetSelectionModal.module.css';

function TargetSelectionModal({closeGoalModal}) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:833px)');
  const [goals, setgoals] = useState("");

  const {
    name,
    goal,
    gender,
    age,
    height,
    weight,
    activity,
    token,
    avatarURL,
  } = useSelector(authSelectors.getUser);

  function setLoseFat() {
    setgoals("Lose fat");
  }
  function setMaintain() {
    setgoals("Maintain");
  }
  function setGainMuscle() {
    setgoals("Gain Muscle");
  }
  function qwe() {
    dispatch(
      authOperations.changeGoal({goal: goals})
    );
    closeGoalModal();
  }
  return (
    <div className={css.modal}>
      <div className={css.titles}>
        <h2 className={css.title}>Target selection</h2>
        <p className={css.subtitle}>
          The service will adjust your calorie intake to your goal
        </p>
      </div>
      <div className={css.buttons}>
        <button onClick={setLoseFat} className={ `${css.radiobutton} ${goals==="Lose fat" && css.active_radiobutton }`}>
          <div className={`${css.border_image} ${goals==="Lose fat" && css.active_border_image}`}>
            <img src={loseFat} alt="loseFat" />
          </div>
          <p>Lose fat</p>
        </button>
        <button onClick={setMaintain} className={`${css.radiobutton} ${goals==="Maintain" && css.active_radiobutton }`}>
          <div className={`${css.border_image} ${goals==="Maintain" && css.active_border_image}`}>
            <img src={maintain} alt="maintain" />
          </div>
          <p>Maintain</p>
        </button>
        <button onClick={setGainMuscle} className={`${css.radiobutton} ${goals==="Gain Muscle" && css.active_radiobutton }`}>
          <div className={`${css.border_image} ${goals==="Gain Muscle" && css.active_border_image}`}>
            <img src={gainMuscle} alt="gainMuscle" />
          </div>
          <p>Gain Muscle</p>
        </button>
        <button onClick={qwe} className={css.button}>Confirm</button>
      </div>
      {isMobile ? (
        <button onClick={closeGoalModal} className={css.close_mobile}>
          Cancel
        </button>
      ) : (
        <button onClick={closeGoalModal} className={css.close}>
          <img src={close} alt="close" />
        </button>
      )}
    </div>
  );
}
export default TargetSelectionModal;
