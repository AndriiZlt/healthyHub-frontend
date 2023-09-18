import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../../assets/welcomeImage.png';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { setRegData } from 'redux/auth/auth-slice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    dispatch(setRegData({ name, email, password }));

    navigate('/usergoal');
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
          <form className={css.form} onSubmit={formSubmitHandler}>
            <input
              value={name}
              placeholder="Name"
              onChange={handleNameChange}
              className={css.input}
            ></input>
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
