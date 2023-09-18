import css from './ButtonDropDown.module.css';
import arrowDown from '../../../assets/arrow_down.svg';
import edit from '../../../assets/edit.svg';

function ButtonDropDown({ image, title, text, editIcon, userAction, subtext }) {
  return (
    <div className={css.button}>
      {userAction ? (
        <>
          <p className={css.user}>{text}</p>
          <img className={css.avatar} src={image} alt="avatar" />
          <img src={arrowDown} alt="arrowDown" />
        </>
      ) : (
        <>
          <div className={css.image}>
            <img src={image} alt={title} />
          </div>
          <div>
            <p className={css.title}>{title}</p>
            <p className={css.text}>
              <span>
                {text}
                <span className={css.subtext}>{subtext}</span>
              </span>

              <img src={editIcon ? edit : arrowDown} alt="arrowDown" />
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ButtonDropDown;
