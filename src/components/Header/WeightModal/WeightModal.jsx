import useMediaQuery from 'helpers/useMediaQuery';
import close from '../../../assets/close-circle.svg';
import css from './WeightModal.module.css';

function WeightModal({ closeWeightModal, closeWeightMobileModal }) {
  const isMobile = useMediaQuery('(max-width:833px)');
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = dd + '.' + mm + '.' + yyyy;
  return (
    <div className={css.modal}>
      <div className={css.titles}>
        <h2 className={css.title}>Enter your current weight</h2>
        <p className={css.subtitle}>You can record your weight once a day</p>
      </div>
      <p className={css.today}>
        Today <span className={css.date}>{today}</span>
      </p>
      <form className={css.form}>
        <input
          className={css.input}
          placeholder="Enter your weight"
          type="text"
        />
        <button className={css.button}>Confirm</button>
      </form>
      {isMobile ? (
        <button onClick={closeWeightMobileModal} className={css.close_mobile}>
          Cancel
        </button>
      ) : (
        <button onClick={closeWeightModal} className={css.close}>
          <img src={close} alt="close" />
        </button>
      )}
    </div>
  );
}
export default WeightModal;
