import { useState } from 'react';
import css from './Action.module.css';
import arrowDown from '../../../assets/arrow_down.svg';
import edit from '../../../assets/edit.svg';
import menu from '../../../assets/menu.svg'

function Action({ type, image, text, editIcon, userAction, isMobile }) {
  const [showModalGoals, setShowModalGoals] = useState(false);

  function openModalGoal() {
    setShowModalGoals(!showModalGoals);
  }
  return (
    <div className={css.relative}>
      <button onClick={openModalGoal} className={css.button}>
        {isMobile ? (
          <img src={menu} alt="menu" />
        ) : userAction ? (
          <>
            <p className={css.user_name}>{text}</p>
            <img className={css.avatar} src={image} alt="avatar" />
            <img width={14} height={14} src={arrowDown} alt="arrowDown" />
          </>
        ) : (
          <>
            <div className={css.goals_image}>
              <img src={image} alt="goals" />
            </div>
            <div>
              <p>{type}</p>
              <p>
                {text}
                <img
                  width={14}
                  height={14}
                  src={editIcon ? edit : arrowDown}
                  alt="arrowDown"
                />{' '}
              </p>
            </div>
          </>
        )}
      </button>
      {showModalGoals && <div className={css.modal}>modal</div>}
    </div>
  );
}

export default Action;
