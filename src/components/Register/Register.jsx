import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../../assets/welcomeImage.png';
import css from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';
import authOperations from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import authSelectors from 'redux/auth/auth-selectors';
import error from '../../assets/error.svg';
import correct from '../../assets/correct.svg';
import eye from '../../assets/eye.svg';
import eyeOff from '../../assets/eye-off.svg';
import Tooltip from 'components/Tooltip/Tooltip';
import { setLoadingTrue } from 'redux/auth/auth-slice';

const Register = () => {
  const { name, email, password } = useSelector(authSelectors.getRegData);
  const [name2, setName2] = useState(name || '');
  const [email2, setEmail2] = useState(email || '');
  const [password2, setPassword2] = useState(password || '');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isBlurredEmail, setIsBlurredEmail] = useState(false);
  const [emailBorder, setEmailBorder] = useState('#e3ffa8');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isBlurredPassword, setIsBlurredPassword] = useState(false);
  const [passwordBorder, setPaswordBorder] = useState('#e3ffa8');
  const [showPassword, setShowPassword] = useState(false);
  const [isShowPasswordBtn, setIsShowPasswordBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName2(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail2(e.target.value);
  };

  const handleEmailValid = () => {
    const emailPattern = /^([a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{2,3})$/;
    // const emailPattern =
    //   /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;

    // const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/;
    setIsValidEmail(emailPattern.test(email2));

    if (emailPattern.test(email2)) {
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
    setPassword2(e.target.value);

    if (password2.length >= 0) {
      setIsShowPasswordBtn(true);
    }
  };

  const handlePasswordValid = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
    setIsValidPassword(passwordPattern.test(password2));

    if (passwordPattern.test(password2)) {
      setPaswordBorder('#3CBC81');
    } else {
      setPaswordBorder('#E74A3B');
    }
  };

  const handlePasswordBlur = () => {
    setIsBlurredPassword(true);
    handlePasswordValid();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (name2 === '' || email2 === '' || password2 === '') {
      Notify.failure('Please fill in all fields!');
      return;
    }

    if (isValidEmail === false || isValidPassword === false) {
      Notify.failure('Please enter valid data!');
      return;
    }
    dispatch(setLoadingTrue());
    const response = await dispatch(
      authOperations.checkEmail({ email: email2 })
    );

    if (response.error) {
      const message = 'Email already use!';
      Notify.failure(message);
    } else {
      dispatch(setRegData({ name: name2, email: email2, password: password2 }));
      navigate('/usergoal');
    }
  };

  return (
    <div className={css.register}>
      <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
      <div>
        <div className={css.signUp}>
          <p className={css.title}>Sign up</p>
          <p className={css.subTitle}>
            You need to register to use the service
          </p>

          <form className={css.form} onSubmit={formSubmitHandler} noValidate>
            <div className={css.inputDiv}>
              <input
                type="text"
                name="name"
                value={name2}
                placeholder="Name"
                onChange={handleNameChange}
                className={css.input}
              ></input>
            </div>

            <div className={css.inputDiv}>
              <input
                type="text"
                name="email"
                value={email2}
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
                value={password2}
                placeholder="Password"
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                className={css.input}
                style={{ borderColor: passwordBorder }}
              ></input>
              {!isBlurredPassword && isShowPasswordBtn && (
                <img
                  className={css.showPasswordBtn}
                  src={showPassword ? eye : eyeOff}
                  alt="Show password"
                  onMouseEnter={togglePasswordVisibility}
                  onMouseLeave={togglePasswordVisibility}
                />
              )}
              {isBlurredPassword && !isValidPassword && (
                <img
                  className={css.error}
                  src={error}
                  alt="Error"
                  onClick={togglePasswordVisibility}
                />
              )}
              {isBlurredPassword && !isValidPassword && (
                <div className={css.notValid}>
                  <Tooltip text="Password should be 6-16 characters long and include at least 1 uppercase letter, 1 lowercase letter and 1 number!">
                    Enter a valid Password *
                  </Tooltip>
                </div>
              )}
              {isBlurredPassword && isValidPassword && (
                <img
                  className={css.correct}
                  src={correct}
                  alt="Correct"
                  onClick={togglePasswordVisibility}
                />
              )}
              {isBlurredPassword && isValidPassword && (
                <p className={css.valid}>Password is secure</p>
              )}
            </div>

            <button
              type="submit"
              className={css.btn}
              onSubmit={formSubmitHandler}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className={css.footerText}>
          <p className={css.text}>Do you already have an account?</p>
          <p
            className={css.signInBtn}
            onClick={() => {
              navigate('/signin');
            }}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
