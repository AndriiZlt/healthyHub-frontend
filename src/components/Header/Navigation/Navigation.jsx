import profile from '../../../assets/profile-circle.svg';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div className={css.auth}>
      <div className={css.sign}>
        <NavLink to="/signin">Sign in</NavLink>
        <p> / </p>
        <NavLink to="/signup">Sign up</NavLink>
      </div>

      <img className={css.profile} src={profile} alt="profile"></img>
    </div>
  );
}

export default Navigation;
