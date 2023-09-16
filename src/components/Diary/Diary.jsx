import React from 'react';
import css from './Diary.module.css';
import arrow_rigth from '../../assets/dairy/arrow-right.svg';
import breakfast from '../../assets/dairy/breakfast.svg';
import edit_pen from '../../assets/dairy/edit_pen.svg';
import edit_text from '../../assets/dairy/edit_text.svg';

const Diary = () => {
  return (
    <section className={css.section}>
      {/* {Breakfast} */}
      <div className={css.dairy_title}>
        <img src={arrow_rigth} alt="arrow-rigth" className={css.arrow_rigth} />
        <h2>Diary</h2>
      </div>

      <div className={css.dairy_wrapper_title}>
        <img src={breakfast} alt="breakfast" className={css.icon_first_dish} />
        <h3>Breakfast </h3>
      </div>

      <ul className={css.dairy_breakfast_list}>
        <li className={css.dairy_breakfast_item}>Carbonohidrates:</li>
        <li className={css.dairy_breakfast_item}>Protein: </li>
        <li className={css.dairy_breakfast_item}>Fat: </li>
      </ul>

      <ul className={css.dairy_english_breakfast_list}>
        <li className={css.dairy_english_breakfast_item}>
          <span>1</span>English breakfast
          <img src={edit_pen} alt="edit_pen" 
          className={css.edit_pen} />
          <img src={edit_text} alt="edit_text" 
          className={css.edit_text} />
        </li>
        <li className={css.dairy_english_breakfast_item}>
          <span>2</span>
        </li>
        <li className={css.dairy_english_breakfast_item}>
          <span>3</span>
        </li>
        <li className={css.dairy_english_breakfast_item}>
          <span>4</span>
        </li>
      </ul>

      {/* {Lunch} */}

      
    </section>
  );
};

export default Diary;
