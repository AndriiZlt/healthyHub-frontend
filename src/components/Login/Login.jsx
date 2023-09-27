import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../../assets/welcomeImage.png';
import css from './Login.module.css';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import error from '../../assets/error.svg';
import correct from '../../assets/correct.svg';
import eye from '../../assets/eye.svg';
import eyeOff from '../../assets/eye-off.svg';
import { setLoadingTrue } from 'redux/auth/auth-slice';

const Login = () => {
  // const lastEmail = useSelector()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isBlurredEmail, setIsBlurredEmail] = useState(false);
  const [emailBorder, setEmailBorder] = useState('#e3ffa8');
  const [showPassword, setShowPassword] = useState(false);
  const [isShowPasswordBtn, setIsShowPasswordBtn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleEmailValid = () => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    setIsValidEmail(emailPattern.test(email));

    if (emailPattern.test(email)) {
      setEmailBorder('#3CBC81');
    } else {
      setEmailBorder('#E74A3B');
    }
  };

  const handleEmailBlur = () => {
    setIsBlurredEmail(true);
    handleEmailValid();
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);

    if (password.length >= 0) {
      setIsShowPasswordBtn(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (email === '' || password === '') {
      Notify.failure('Please fill in all fields!');
      return;
    }

    // if (isValidEmail === false || isValidPassword === false) {
    if (isValidEmail === false) {
      Notify.failure('Please enter valid data!');
      return;
    }
    dispatch(setLoadingTrue());
    const response = await dispatch(authOperations.logIn({ email, password }));
    if (response.payload) {
      navigate('/main');
    } else {
      Notify.failure('Email or password is wrong');
      setPassword('');
      setIsBlurredEmail(false);
      handleEmailValid();
      setEmailBorder('#e3ffa8');
      setIsShowPasswordBtn(false);
    }
  };

  return (
    <div className={css.login}>
      <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
      <div>
        <div className={css.signIn}>
          <p className={css.title}>Sign in</p>
          <p className={css.subTitle}>You need to login to use the service</p>
          <div>
            <form className={css.form} onSubmit={formSubmitHandler} noValidate>
              <div className={css.inputDiv}>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={css.input}
                  style={{ borderColor: emailBorder }}
                ></input>
                {isBlurredEmail && !isValidEmail && (
                  <img className={css.error} src={error} alt="Error" />
                )}
                {isBlurredEmail && !isValidEmail && (
                  <p className={css.notValid}>Enter a valid Email</p>
                )}
                {isBlurredEmail && isValidEmail && (
                  <img className={css.correct} src={correct} alt="Correct" />
                )}
                {isBlurredEmail && isValidEmail && (
                  <p className={css.valid}>Email is valid</p>
                )}
              </div>

              <div className={css.inputDiv}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  // onBlur={handlePasswordBlur}
                  className={css.input}
                  // style={{ borderColor: passwordBorder }}
                ></input>
                {/* {!isBlurredPassword && isShowPasswordBtn && ( */}
                {isShowPasswordBtn && (
                  <img
                    className={css.showPasswordBtn}
                    src={showPassword ? eye : eyeOff}
                    alt="Show password"
                    onMouseEnter={togglePasswordVisibility}
                    onMouseLeave={togglePasswordVisibility}
                  />
                )}
              </div>

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
