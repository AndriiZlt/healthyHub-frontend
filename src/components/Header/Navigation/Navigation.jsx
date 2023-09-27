import profile from '../../../assets/profile-circle.svg';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const { pathname } = useLocation();

  const handleActiveStyle = ({ isActive }) => {
    return {
      color:
        isActive ||
        pathname === '/usergoal' ||
        pathname === '/usergender' ||
        pathname === '/userbody' ||
        pathname === '/useractivity'
          ? '#E3FFA8'
          : '#FFFFFF',
    };
  };
  const handleisActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? '#E3FFA8' : '#FFFFFF',
    };
  };

  return (
    <div className={css.auth}>
      <div className={css.sign}>
        <NavLink style={handleisActiveStyle} className={css.link} to="/signin">
          Sign in
        </NavLink>
        <p className={css.link}> / </p>
        <NavLink style={handleActiveStyle} className={css.link} to="/signup">
          Sign up
        </NavLink>
      </div>

      <img className={css.profile} src={profile} alt="profile"></img>
    </div>
  );
}

export default Navigation;
