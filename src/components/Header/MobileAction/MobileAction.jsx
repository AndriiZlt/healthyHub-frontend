import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import ButtonDropDown from '../ButtonDropDown/ButtonDropDown';
import close from '../../../assets/close-circle.svg';
import css from './MobileAction.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import WeightModal from '../WeightModal/WeightModal';
import TargetSelectionModal from '../TargetSelectionModal/TargetSelectionModal';

import loseFat from '../../../assets/loseFat.png';
import maintain from '../../../assets/Maintain.png';
import gainMuscle from '../../../assets/gainMuscle.png';
import weightImage from '../../../assets/Weight.png';

function MobileAction({ closeButton }) {
  const { goal, weight } = useSelector(authSelectors.getUser);
  const [showGoal, setShowGoal] = useState(false);
  const [showWeight, setshowWeight] = useState(false);

  const handleGoalClose = () => setShowGoal(false);
  const handleGoalShow = () => setShowGoal(true);

  const handleWeightClose = () => setshowWeight(false);
  const handleWeightShow = () => setshowWeight(true);

  function closeGoalModal() {
    setShowGoal(false);
  }
  function closeWeightModal() {
    setshowWeight(false);
  }

  return (
    <div className={css.mobile_action}>
      <button className={css.button} onClick={handleGoalShow}>
        <ButtonDropDown
          image={
            goal === 'Lose fat'
              ? loseFat
              : goal === 'Maintain'
              ? maintain
              : gainMuscle
          }
          title="Goal"
          text={goal}
        />
      </button>
      <Modal
        show={showGoal}
        onHide={handleGoalClose}
        dialogClassName={css.modal_action_dialog}
        contentClassName={css.modal_action_content}
      >
        <Modal.Body className={css.modal}>
          <TargetSelectionModal closeGoalModal={closeGoalModal} />
        </Modal.Body>
      </Modal>
      <button className={css.button} onClick={handleWeightShow}>
        <ButtonDropDown
          image={weightImage}
          title="Weight"
          text={weight}
          subtext="kg"
          editIcon={true}
        />
      </button>
      <Modal
        show={showWeight}
        onHide={handleWeightClose}
        dialogClassName={css.modal_action_dialog}
        contentClassName={css.modal_action_content}
      >
        <Modal.Body className={css.modal}>
          <WeightModal closeWeightMobileModal={closeWeightModal} />
        </Modal.Body>
      </Modal>
      <button onClick={closeButton} className={css.close}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
}

export default MobileAction;
