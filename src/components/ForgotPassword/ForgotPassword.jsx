import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import wellcomeImage from "../../assets/welcomeImage.png"
import css from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  const navigate = useNavigate();

  return <div className={css.forgotPassword}> 
    <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
    <div>
      <div className={css.forgot}>
        <p className={css.title}>Forgot your password</p>
        <p className={css.subTitle}>We will send you an email with recovery instructions</p>
        <form className={css.form} onSubmit={formSubmitHandler}>
          <input value={email} placeholder='E-mail' onChange={handleEmailChange} className={css.input}></input>
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
