import { NavLink } from 'react-router-dom';
import css from './LogoutModal.module.css';
import logout from '../../../assets/logout.svg';
import settings from '../../../assets/setting.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { setLoadingTrue } from 'redux/auth/auth-slice';

function LogoutModal({ closeModal }) {
  const dispatch = useDispatch();

  function actiocClick() {
    dispatch(setLoadingTrue());
    closeModal();
    dispatch(authOperations.logOut());
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
      <NavLink className={css.user_link} to="/" onClick={actiocClick}>
        <img src={logout} alt="logout" />
        <p className={css.link}>Log out</p>
      </NavLink>
    </div>
  );
}

export default LogoutModal;
