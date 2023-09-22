import css from './ButtonDropDown.module.css';
import arrowDown from '../../../assets/arrow_down.svg';
import edit from '../../../assets/edit.svg';
import arrowRight from '../../../assets/arrow_right.svg';
import useMediaQuery from 'helpers/useMediaQuery';

function ButtonDropDown({
  image,
  title,
  text,
  editIcon,
  userAction,
  subtext,
  showSetting,
  showGoal,
}) {
  const isMobile = useMediaQuery('(max-width:833px)');
  return (
    <div className={css.button}>
      {userAction ? (
        <>
          <p className={css.user}>{text}</p>
          <img className={css.avatar} src={image} alt="avatar" />
          <img
            src={arrowDown}
            alt="arrowDown"
            className={showSetting ? css.up : css.down}
          />
        </>
      ) : (
        <>
          <div className={css.image}>
            <img src={image} alt={title} />
          </div>
          <div>
            <p className={css.title}>{title}</p>
            <p className={css.text}>
              <span className={css.texts}>
                {text}
                <span className={css.subtext}>{subtext}</span>
              </span>
              {isMobile ? (
                <img src={editIcon ? edit : arrowRight} alt="arrowRight" />
              ) : (
                <img
                  src={editIcon ? edit : arrowDown}
                  alt="arrowDown"
                  className={showGoal ? css.up : css.down}
                />
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ButtonDropDown;
