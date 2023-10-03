import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './AddMeal.module.css';
import breakfast from '../../assets/breakfast.svg';
import plus from '../../assets/plus.svg';
import { useDispatch } from 'react-redux'; // eslint-disable-line no-unused-vars
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import mealsOperations from 'redux/meals/meals-operations';
import { setModalsOff, setModalMealOn } from 'redux/meals/meals-slice';
import InputModalElement from './InputModalElement';
import CloseButton from './CloseButton';
import useMediaQuery from 'helpers/useMediaQuery';

let data = [
  {
    mealType: '',
    name: '',
    carbonohidrates: '',
    protein: '',
    fat: '',
    calories: '',
  },
];

const ModalAddMeal = ({ title }) => {
  const [display, setDisplay] = useState(1);
  const isMobile = useMediaQuery('(max-width:833px');
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', e => pressKeyHandler(e));
    return document.removeEventListener('keydown', e => pressKeyHandler(e));
  });

  const pressKeyHandler = e => {
    if (e.key === 'Enter') {
      addMealHandler(e);
    }
    if (e.currentTarget.id === 'cancelMeal' || e.key === 'Escape') {
      dispatch(setModalsOff());
      setDisplay(1);
      data = [
        {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        },
      ];
    }
  };

  Notiflix.Notify.init({
    zindex: 9999999,
  });

  const formSubmitHandler = async () => {
    if (
      data[display - 1].name === '' ||
      data[display - 1].carbonohidrates === '' ||
      data[display - 1].protein === '' ||
      data[display - 1].fat === '' ||
      data[display - 1].calories === ''
    ) {
      Notify.warning('Fill in all fields!');
      return;
    }

    dispatch(setModalsOff());
    const title = document.getElementById('mealTitle').innerHTML; // eslint-disable-line no-unused-vars

    (async () => {
      for (const record of data) {
        if (record.name !== '') {
          record.mealType = title.toLowerCase();

          await dispatch(mealsOperations.recordMeal(record));
        }
      }
      Notify.success('Your meal was recorded!');

      data = [
        {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        },
      ];
    })();
  };

  const addMealHandler = () => {
    if (
      data[display - 1].name === '' ||
      data[display - 1].carbonohidrates === '' ||
      data[display - 1].protein === '' ||
      data[display - 1].fat === '' ||
      data[display - 1].calories === ''
    ) {
      Notify.warning('Fill in all fields!');
      return;
    }

    if (isMobile) {
      (async () => {
        await formSubmitHandler();
        dispatch(setModalMealOn());
      })();
    } else {
      data.push({
        mealType: '',
        name: '',
        carbonohidrates: '',
        protein: '',
        fat: '',
        calories: '',
      });
      setDisplay(display + 1);
    }

    // div need get scrolled
    const div = document.getElementById('formDiv');
    // element which height would be a scroll parameter
    const { height: cardHeight } = document
      .getElementById('recordMealForm')
      .firstElementChild.getBoundingClientRect();
    // scroll
    setTimeout(() => {
      div.scrollBy({
        top: cardHeight * 1.5,
        behavior: 'smooth',
      });
    }, 200);
  };

  const onChangeHandler = (e, value) => {
    data[Number(e.target.name)][e.target.id] = value.toString();
  };

  const closeHandler = e => {
    if (data.length === 1) {
      dispatch(setModalsOff());
      setDisplay(1);
      data = [
        {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        },
      ];
    } else {
      data.splice(Number(e.target.name), 1);
      setDisplay(display - 1);
    }
  };

  return (
    <div className={css.overlay} id="overlay">
      <div className={css.modal}>
        <div className={css.section}>
          <h2>Record your meal</h2>
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

            <div
              className={css.closeBtn}
              onClick={pressKeyHandler}
              id="cancelMeal"
            >
              <CloseButton />
            </div>
          </div>
          <div className={css.formDiv} id="formDiv">
            <ul className={css.formMeal} id="recordMealForm">
              {data.map(item => {
                return (
                  <li key={data.indexOf(item)}>
                    <InputModalElement
                      onChangeHandler={onChangeHandler}
                      closeHandler={closeHandler}
                      id={data.indexOf(item)}
                      values={item}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={css.buttons}>
            <div className={css.add_meal_bottom} onClick={addMealHandler}>
              <img
                src={plus}
                alt="plus"
                style={{ width: 32, height: 32, marginRight: 10 }}
              />
              Add more
            </div>
            <button
              type="button"
              id="confirmMeal"
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

export default ModalAddMeal;
