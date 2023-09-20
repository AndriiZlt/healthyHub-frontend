import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import ButtonDropDown from '../ButtonDropDown/ButtonDropDown';
import close from '../../../assets/close-circle.svg';
import css from './MobileAction.module.css';
import authSelectors from 'redux/auth/auth-selectors';


function MobileAction({ closeButton }) {
  const { goal, weight} = useSelector(authSelectors.getUser);
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
          image="https://i.ibb.co/T8wdLSc/Lose-fat.png"
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
          <button onClick={closeGoalModal}>CLOSE</button>
        </Modal.Body>
      </Modal>
      <button className={css.button} onClick={handleWeightShow}>
        <ButtonDropDown
          image="https://i.ibb.co/y5LpgvL/Waight-image.png"
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
        <Modal.Body>
          <button onClick={closeWeightModal}>CLOSE</button>
        </Modal.Body>
      </Modal>
      <button onClick={closeButton} className={css.close}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
}

export default MobileAction;
