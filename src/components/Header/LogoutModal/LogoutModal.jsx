import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import css from './LogoutModal.module.css';
import logout from '../../../assets/logout.svg';
import settings from '../../../assets/setting.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { setLoadingTrue } from 'redux/auth/auth-slice';
import { clearMealData } from 'redux/meals/meals-slice';
import close from '../../../assets/close-circle.svg';

import Modal from 'react-bootstrap/Modal';

function LogoutModal({ closeModal }) {
  const [showModal, setshowModal] = useState(false);
  function handleModalShow() {
    setshowModal(true);
  }
  function handleModalClose() {
    setshowModal(false);
  }
  const dispatch = useDispatch();

  function actiocClick() {
    (async () => {
      dispatch(setLoadingTrue());
      closeModal();
      dispatch(authOperations.logOut()).then(() => dispatch(clearMealData()));
    })();
  }
  return (
    <div className={css.logout}>
      <NavLink
        onClick={() => closeModal()}
        className={css.user_link}
        to="/settings"
      >
        <img src={settings} alt="settings" />
        <p className={css.link}>Setting</p>
      </NavLink>

      <button onClick={handleModalShow} className={css.user_link}>
        <img src={logout} alt="logout" />
        <p className={css.link}>Log out</p>
      </button>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        dialogClassName={css.modal_action_dialog}
        contentClassName={css.modal_action_content}
      >
        <Modal.Body className={css.modal}>
          <button onClick={handleModalClose} className={css.close_button}>
            <img src={close} alt="close" width={30} height={30} />
            <p className={css.close_text}>Cancel</p>
          </button>
          <NavLink
            className={`${css.user_link} ${css.logout_link}`}
            to="/"
            onClick={actiocClick}
          >
            <img src={logout} alt="logout" width={30} height={30} />
            <p className={css.link}>Log out</p>
          </NavLink>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LogoutModal;
