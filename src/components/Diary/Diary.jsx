import React, { useState } from 'react';
// import { useState } from 'react';
import css from './Diary.module.css';
// import recordMealModal from './recordMealModal';
import arrow_rigth from '../../assets/arrow-back.svg';
import breakfastImage from '../../assets/breakfast.svg';
import lunchImage from '../../assets/lunch.svg';
import dinnerImage from '../../assets/dinner.svg';
import snackImage from '../../assets/snack.svg';
import useCalculatedData from 'helpers/useCalculatedData';
import { useDispatch, useSelector } from 'react-redux';
import mealsSelectors from 'redux/meals/meals-selectors';
import { NavLink } from 'react-router-dom';
import ModalAddMeal from '../Main/ModalAddMeal';
import {
  setModalsOff,
  setModalMealOn,
  setModalEditOn,
} from 'redux/meals/meals-slice';
import EditModal from './EditMealModal';
import MealBlock from './MealBlock';

const Diary = () => {
  const modalMealOn = useSelector(mealsSelectors.getModalMealOn);
  const [mealTitle, setMealTitle] = useState(''); // eslint-disable-line
  const [mealId, setMealId] = useState('');
  const [meal, setMeal] = useState('');
  const dispatch = useDispatch();
  const editModalOn = useSelector(mealsSelectors.detModalEditOn);

  // eslint-disable-next-line
  const { breakfast, lunch, dinner, snack } = useSelector(
    mealsSelectors.getCurrentDay
  ); // eslint-disable-line
  const {
    breakfast: breakfast2,
    lunch: lunch2,
    dinner: dinner2,
    snack: snack2,
  } = useCalculatedData();

  const modalHandler = e => {
    setMealTitle(e.target.id);
    dispatch(setModalMealOn());
  };

  if (modalMealOn || editModalOn) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const escHandler = e => {
    if (
      // e.target.id === 'overlay' ||
      e.code === 'Escape' ||
      e.target.id === 'cancelMeal'
    ) {
      dispatch(setModalsOff());
    }
  };

  const editMealHandler = (mealTitle, meal) => {
    setMealTitle(mealTitle);
    setMeal(meal);
    setMealId(meal._id);
    dispatch(setModalEditOn());
    window.addEventListener('keydown', escHandler);
    window.addEventListener('click', escHandler);
  };

  return (
    <section className={css.sectionDiary}>
      {modalMealOn && <ModalAddMeal title={mealTitle} />}
      {editModalOn && <EditModal meal={meal} title={mealTitle} id={mealId} />}
      <div className={css.dairy_title}>
        <NavLink to="/main">
          <img
            src={arrow_rigth}
            alt="arrow-rigth"
            className={css.arrow_rigth}
          />
        </NavLink>
        <h2>Diary</h2>
      </div>

      <div className={css.wrapper}>
        <div className={css.blockWrapper}>
          <MealBlock
            title="Breakfast"
            meal={breakfast}
            calculatedData={breakfast2}
            image={breakfastImage}
            editMealHandler={editMealHandler}
            modalHandler={modalHandler}
          />
        </div>
        <div className={css.blockWrapper}>
          <MealBlock
            title="Lunch"
            meal={lunch}
            calculatedData={lunch2}
            image={lunchImage}
            editMealHandler={editMealHandler}
            modalHandler={modalHandler}
          />
        </div>

        <div className={css.blockWrapper}>
          <MealBlock
            title="Dinner"
            meal={dinner}
            calculatedData={dinner2}
            image={dinnerImage}
            editMealHandler={editMealHandler}
            modalHandler={modalHandler}
          />
        </div>

        <div className={css.blockWrapper}>
          <MealBlock
            title="Snake"
            meal={snack}
            calculatedData={snack2}
            image={snackImage}
            editMealHandler={editMealHandler}
            modalHandler={modalHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Diary;
