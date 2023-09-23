import React from 'react';
import { useState } from 'react';
import css from './RecordMealModal.module.css';
import breakfast from '../../assets/breakfast.svg';
import plus from '../../assets/plus.svg';

const RecordMealModal = () => {
  const [product, setProduct] = useState(); // eslint-disable-line no-unused-vars
  const [carbonoh, setCarbonoh] = useState(); // eslint-disable-line no-unused-vars
  const [protein, setProtein] = useState(); // eslint-disable-line no-unused-vars
  const [fat, setFat] = useState(); // eslint-disable-line no-unused-vars

  const formSubmitHandler = async e => {
    e.preventDefault();
    // if (email === '' || password === '') {
    //   Notify.failure('Please fill in all fields!');
    //   return;
    // }
  };

  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}>
        <div className={css.section}>
          <h2>Record your meal</h2>
          <div className={css.diary_wrapper_title}>
            <a href="a">
              <img
                src={breakfast}
                alt="breakfast"
                style={{ height: 32, width: 32 }}
              />
            </a>
            <h3 className={css.diary_title}>Breakfast</h3>
          </div>
          <form onSubmit={formSubmitHandler} id="recordMealForm">
            <ul className={css.diary_breakfast_list}>
              <li className={css.diary_breakfast_item}>
                <input
                  type="text"
                  placeholder="The name of the product or dish"
                />
              </li>
              <li className={css.diary_breakfast_item}>
                <input type="text" placeholder="Carbonoh" />
              </li>
              <li className={css.diary_breakfast_item}>
                <input type="text" placeholder="Protein" />
              </li>
              <li className={css.diary_breakfast_item}>
                <input type="text" placeholder="Fat" />
              </li>
              <li className={css.diary_breakfast_item}>
                <input type="text" placeholder="Calories" />
              </li>
            </ul>
          </form>
          <div className={css.diary_add_meal_wrapper}>
            <a href="" className={css.diary_add_meal}>
              <img
                src={plus}
                alt="plus"
                className={css.plus}
                style={{ height: 16, width: 16 }}
              />
              Add more
            </a>
          </div>

          <div className={css.buttons}>
            <button
              type="button"
              id="cancel"
              onClick={() => {}}
              className={css.btn}
            >
              Cancel
            </button>
            <button
              type="button"
              id="add-more"
              onClick={() => {}}
              className={css.btnActive}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordMealModal;
