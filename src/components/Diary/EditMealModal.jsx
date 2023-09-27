import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './EditMeal.module.css';
import breakfast from '../../assets/breakfast.svg';
import { useDispatch } from 'react-redux'; // eslint-disable-line no-unused-vars
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import capitalize from 'helpers/useCapitalize';
import mealsOperations from 'redux/meals/meals-operations';
import { setModalsOff } from 'redux/meals/meals-slice';

const EditModal = ({ meal, title, id }) => {
  const [edited, setEdited] = useState(false);
  const div1 = 'flex';
  const [div1name, setDiv1name] = useState(meal.name);
  const [div1carb, setDiv1carb] = useState(meal.carbonohidrates);
  const [div1protein, setDiv1protein] = useState(meal.protein);
  const [div1fat, setDiv1fat] = useState(meal.fat);
  const [div1calories, setDiv1calories] = useState(meal.calories);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keypress', enterHandler);
    return document.removeEventListener('keypress', enterHandler);
  });

  const enterHandler = e => {
    if (e.key === 'Enter') {
      formSubmitHandler(e);
    }
  };

  Notiflix.Notify.init({
    zindex: 9999999,
  });

  const formSubmitHandler = async () => {
    if (
      div1name === '' ||
      div1carb === '' ||
      div1protein === '' ||
      div1fat === '' ||
      div1calories === ''
    ) {
      Notify.warning('Fill in all fields!');
      return;
    }

    const data = {
      mealType: title.toLowerCase(),
      name: div1name,
      carbonohidrates: div1carb,
      protein: div1protein,
      fat: div1fat,
      calories: div1calories,
    };
    if (edited) {
      dispatch(mealsOperations.editMeal({ id, data })).then(() => {
        Notify.success('Meal was updated!');
        dispatch(setModalsOff());
      });
    } else {
      dispatch(setModalsOff());
    }
  };

  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}>
        <div className={css.section}>
          <h2>Edit meal</h2>
          <div className={css.diary_wrapper_title}>
            <img
              src={breakfast}
              alt="breakfast"
              style={{ height: 32, width: 32 }}
            />
            <h3
              className={css.diary_title}
              id="mealTitle"
              style={{ marginLeft: 12 }}
            >
              {title}
            </h3>
          </div>
          <div className={css.formDiv}>
            <div className={css.formMeal} id="recordMealForm">
              {/* DIV 1 */}
              <div
                className={css.diary_breakfast_list}
                name="meal"
                id="0"
                style={{ display: div1 }}
                onChange={() => {
                  setEdited(true);
                }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  value={div1name}
                  onChange={e => {
                    setDiv1name(capitalize(e.target.value));
                  }}
                />

                <input
                  className={css.diary_breakfast_item}
                  min="0"
                  max="500"
                  type="number"
                  placeholder="Carbonoh"
                  id="carbonohidrates"
                  value={div1carb}
                  onChange={e => {
                    setDiv1carb(e.target.value);
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Protein"
                  id="protein"
                  value={div1protein}
                  onChange={e => {
                    setDiv1protein(e.target.value);
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Fat"
                  id="fat"
                  value={div1fat}
                  onChange={e => {
                    setDiv1fat(e.target.value);
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Calories"
                  id="calories"
                  value={div1calories}
                  onChange={e => {
                    setDiv1calories(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className={css.buttons}>
            <button type="button" id="cancelMeal" className={css.btn}>
              Cancel
            </button>
            <button
              type="button"
              id="confirmEdit"
              onClick={formSubmitHandler}
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

export default EditModal;
