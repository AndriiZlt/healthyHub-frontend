import React from 'react';
import { useNavigate } from "react-router-dom";
import wellcomeImage from "../../assets/welcomeImage.png"
import css from './Wellcome.module.css';

const Wellcome = () => {
  const navigate = useNavigate();

  return <div className={css.wellcome}>
    <img src={wellcomeImage} alt="wellcomeImage" className={css.image} />
    <div className={css.info}>
      <p className={css.title}>Set goals and achieve them</p>
      <p className={css.subTitle}>The service will help you set goals and follow them.</p>
      <div className={css.buttons}>
        <button onClick={() => { navigate('/signin') }} className={css.btnActive}>Sign in</button>
        <button onClick={() => { navigate('/signup') }} className={css.btn}>Sign up</button>
      </div>
      <div className={css.benefits}>
        <ul className={css.benefitsList}>
          <li className={css.benefitsItem}>
            <p className={css.benefitsName}>Set goals</p>
          </li>
          <li className={css.benefitsItem}>
            <p className={css.benefitsName}>Watch your calories</p>
          </li>
          <li className={css.benefitsItem}>
            <p className={css.benefitsName}>Keep track of your water intake</p>
          </li>
          <li className={css.benefitsItem}>
            <p className={css.benefitsName}>Control your weight</p>
          </li>
        </ul>
      </div>
      
    </div>
  </div>;
};

export default Wellcome;
