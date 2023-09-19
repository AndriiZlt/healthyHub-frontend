import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../../assets/welcomeImage.png';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';
import authOperations from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isBlurredEmail, setIsBlurredEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isBlurredPassword, setIsBlurredPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailBorder, setEmailBorder] = useState('#e3ffa8');

  const handleNameChange = e => {
    setName(e.target.value);
  };

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
  };
  const handlePasswordValid = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
    setIsValidPassword(passwordPattern.test(password));
  };
  const handlePasswordBlur = () => {
    setIsBlurredPassword(true);
    handlePasswordValid();
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      Notify.failure('Please fill in all fields!');
      return;
    }

    // const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    // setIsValidEmail(emailPattern.test(email));

    // if (emailPattern.test(email) === false) {
    //   return Notify.failure('Enter a valid email');
    // }

    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

    // if (passwordPattern.test(password) === false) {
    //   return Notify.failure('Password must be a minimum of 6 characters, a maximum of 16 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number');
    // }

    const response = await dispatch(authOperations.checkEmail({ email }));

    if (response.payload.status === 200) {
      dispatch(setRegData({ name, email, password }));
      navigate('/usergoal');
    } else {
      const message = response.payload.data.message;
      Notify.failure(message);
    }
    // dispatch(setRegData({ name, email, password }));

    // navigate('/usergoal');
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
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
                className={css.input}
              ></input>
            </div>

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
                <p className={css.notValid}>Enter a valid Email</p>
              )}
              {isBlurredEmail && isValidEmail && (
                <p className={css.valid}>Email is valid</p>
              )}
            </div>
            <div className={css.inputDiv}>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                className={css.input}
              ></input>
              {isBlurredPassword && !isValidPassword && (
                <p className={css.notValid}>Enter a valid Password *</p>
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
