import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import wellcomeImage from "../../assets/welcomeImage.png"
import error from '../../assets/error.svg';
import correct from '../../assets/correct.svg';
import css from './ForgotPassword.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isBlurredEmail, setIsBlurredEmail] = useState(false);
  const [emailBorder, setEmailBorder] = useState('#e3ffa8');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
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

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email === '') {
      Notify.failure('Please enter your email!');
      return;
    }

    if (isValidEmail === false) {
      Notify.failure('Please enter valid data!');
      return;
    }
  }

  return <div className={css.forgotPassword}> 
    <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
    <div>
      <div className={css.forgot}>
        <p className={css.title}>Forgot your password</p>
        <p className={css.subTitle}>We will send you an email with recovery instructions</p>
        <form className={css.form} onSubmit={formSubmitHandler}>
          <div className={css.inputDiv}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder='E-mail'
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={css.input}
              style={{ borderColor: emailBorder }}
            ></input>
            {isBlurredEmail && !isValidEmail && (<img
              className={css.error}
              src={error}
              alt="Error"
            />)}
            {isBlurredEmail && !isValidEmail && (
              <p className={css.notValid}>Enter a valid Email</p>
            )}
            {isBlurredEmail && isValidEmail && (<img
              className={css.correct}
              src={correct}
              alt="Correct"
            />)}
            {isBlurredEmail && isValidEmail && (
              <p className={css.valid}>Email is valid</p>
            )}
          </div>
          
          <button type="submit" className={css.btn}>Send</button>
        </form>
      </div>
      <div className={css.footerText}>
        <p className={css.text}>Do you already have an account?</p>
        <p className={css.signUpBtn} onClick={() => { navigate('/signin') }}>Sign In</p>
      </div>
    </div>
  </div>;
};

export default ForgotPassword;
