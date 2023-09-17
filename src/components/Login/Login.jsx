import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../../assets/welcomeImage.png';
import css from './Login.module.css';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    navigate('/main');
  };

  return (
    <div className={css.login}>
      <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
      <div>
        <div className={css.signIn}>
          <p className={css.title}>Sign in</p>
          <p className={css.subTitle}>You need to login to use the service</p>
          <div>
            <form className={css.form} onSubmit={formSubmitHandler}>
              <input
                value={email}
                placeholder="E-mail"
                onChange={handleEmailChange}
                className={css.input}
              ></input>
              <input
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                className={css.input}
              ></input>
              <button
                type="submit"
                className={css.btn}
                onSubmit={formSubmitHandler}
              >
                Sign In
              </button>
            </form>
            <p
              className={css.forgot}
              onClick={() => {
                navigate('/forgot-password');
              }}
            >
              Forgot your password?
            </p>
          </div>
        </div>
        <div className={css.footerText}>
          <p className={css.text}>If you don't have an account yet</p>
          <p
            className={css.signUpBtn}
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
