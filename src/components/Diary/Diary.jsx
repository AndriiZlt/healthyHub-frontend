import React, { useState } from 'react';
// import { useState } from 'react';
import css from './Diary.module.css';
// import recordMealModal from './recordMealModal';
import arrow_rigth from '../../assets/arrow-back.svg';
import breakfastImage from '../../assets/breakfast.svg';
import lunchImage from '../../assets/lunch.svg';
import dinnerImage from '../../assets/dinner.svg';
import snackImage from '../../assets/snack.svg';
import edit_pen from '../../assets/edit_pen.svg';
import edit_text from '../../assets/edit_text.svg';
import plus from '../../assets/plus.svg';
import useCalculatedData from 'helpers/useCalculatedData';
import { useDispatch, useSelector } from 'react-redux';
import mealsSelectors from 'redux/meals/meals-selectors';
import { NavLink } from 'react-router-dom';
import ModalAddMeal from '../Main/ModalAddMeal';
import { setModalsOff, setModalMealOn } from 'redux/meals/meals-slice';
// import recordYourMeal from 'assets/recordYourMeal.svg';

const Diary = () => {
  const modalMealOn = useSelector(mealsSelectors.getModalMealOn);
  const [mealTitle, setMealTitle] = useState(''); // eslint-disable-line
  const dispatch = useDispatch();

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
    console.log('meal title', e.target.name);
    // setMealTitle(e.target);

    dispatch(setModalMealOn());
    window.addEventListener('keydown', escHandler);
    window.addEventListener('click', escHandler);
  };

  const escHandler = e => {
    if (
      e.target.id === 'overlay' ||
      e.code === 'Escape' ||
      e.target.id === 'cancelMeal'
    ) {
      dispatch(setModalsOff());
      window.removeEventListener('keydown', escHandler);
      window.removeEventListener('click', escHandler);
    }
  };

  return (
    <section className={css.sectionDiary}>
      {modalMealOn && <ModalAddMeal title={mealTitle} />}
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

      {/* Breakfast List */}
      <div className={css.wrapper}>
        <div className={css.wrapper_dishes}>
          <div className={css.dairy_dish_wrapper}>
            <div className={css.dairy_wrapper}>
              <div className={css.dairy_wrapper_title}>
                <div className={css.dairy_title_breakfast}>
                  <img
                    src={breakfastImage}
                    alt="breakfast"
                    className={css.icon_dish}
                  />
                  <h3>Breakfast</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>
                    {breakfast2.carbonohidrates}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>
                    {breakfast2.protein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>
                    {breakfast2.fat}
                  </span>
                </li>
              </ul>
            </div>

            {/* GREY BLOCK */}
            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>
              {/* meals list */}
              <div className={css.dairy_dish_list}>
                {/* Records */}
                {breakfast.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <img
                            src={edit_pen}
                            alt="edit_pen"
                            className={css.edit_pen}
                          />
                          <img
                            src={edit_text}
                            alt="edit_text"
                            className={css.edit_text}
                          />
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Prot.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.protein}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Fat.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.fat}
                              </span>
                            </li>
                            <div className={css.dairy_icons_edit}>
                              <img
                                src={edit_pen}
                                alt="edit_pen"
                                className={css.edit_icon}
                                style={{ height: 16, width: 16 }}
                              />

                              <img
                                src={edit_text}
                                alt="edit_text"
                                className={css.edit_icon}
                                style={{ height: 20, width: 27 }}
                              />
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* end of records */}
                {/* + Record meal text */}
                <div className={css.recordMealText}>
                  <img
                    src={plus}
                    alt="plus"
                    style={{ height: 16, width: 16 }}
                  />
                  <p
                    className={css.dairy_add_dish}
                    name="Breakfast"
                    onClick={modalHandler}
                  >
                    Record your meal
                  </p>
                </div>
                {/* end of text */}
              </div>
            </div>
          </div>

          {/* {Lunch List} */}
          {/* <div className={css.dairy_dish_wrapper}> */}
          <div className={css.dairy_wrapper}>
            <div className={css.dairy_title_lunch}>
              <img src={lunchImage} alt="lunch" className={css.icon_dish} />
              <h3>Lunch</h3>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>
                  {lunch2.carbonohidrates}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>
                  {lunch2.protein}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>{lunch2.fat}</span>
              </li>
            </ul>
          </div>

          {/* GREY BLOCK */}
          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>
            {/* meals list */}
            <div className={css.dairy_dish_list}>
              {/* Records */}
              {lunch.map(record => {
                return (
                  <div className={css.record} key={record._id}>
                    <div className={css.dairy_elem_list}>
                      <div className={css.dairy_add_dish_item}>
                        <p className={css.dairy_dish_p}>{record.name}</p>
                        <img
                          src={edit_pen}
                          alt="edit_pen"
                          className={css.edit_pen}
                        />
                        <img
                          src={edit_text}
                          alt="edit_text"
                          className={css.edit_text}
                        />
                      </div>

                      <div className={css.dairy_elem_breakfast}>
                        <ul className={css.dairy_elem_breakfast_list}>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Carb.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.carbonohidrates}
                            </span>
                          </li>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Prot.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.protein}
                            </span>
                          </li>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Fat.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.fat}
                            </span>
                          </li>
                          <div className={css.dairy_icons_edit}>
                            <img
                              src={edit_pen}
                              alt="edit_pen"
                              className={css.edit_icon}
                              style={{ height: 16, width: 16 }}
                            />

                            <img
                              src={edit_text}
                              alt="edit_text"
                              className={css.edit_icon}
                              style={{ height: 20, width: 27 }}
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* end of records */}
              {/* + Record meal text */}
              <div className={css.recordMealText}>
                <img src={plus} alt="plus" style={{ height: 16, width: 16 }} />
                <p
                  className={css.dairy_add_dish}
                  name="Lunch"
                  onClick={modalHandler}
                >
                  Record your meal
                </p>
                {/* <img
                  style={{ width: 150, height: 20 }}
                  src={recordYourMeal}
                  alt="record-your-meal"
                  id="meal"
                  name="Dinner"
                  onClick={modalHandler}
                /> */}
              </div>
              {/* end of text */}
            </div>
          </div>
          {/* End of the grey block */}
        </div>

        {/* Dinner List */}
        <div className={css.wrapper_dishes}>
          <div className={css.dairy_dish_wrapper}>
            <div className={css.dairy_wrapper}>
              <div className={css.dairy_wrapper_title}>
                <div className={css.dairy_title_dinner}>
                  <img
                    src={dinnerImage}
                    alt="dinner"
                    className={css.icon_dish}
                  />
                  <h3>Dinner</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>
                    {dinner2.carbonohidrates}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>
                    {dinner2.protein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>
                    {dinner2.fat}
                  </span>
                </li>
              </ul>
            </div>
            {/* GREY BLOCK */}
            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>
              {/* meals list */}
              <div className={css.dairy_dish_list}>
                {/* Records */}
                {dinner.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <img
                            src={edit_pen}
                            alt="edit_pen"
                            className={css.edit_pen}
                          />
                          <img
                            src={edit_text}
                            alt="edit_text"
                            className={css.edit_text}
                          />
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Prot.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.protein}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Fat.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.fat}
                              </span>
                            </li>
                            <div className={css.dairy_icons_edit}>
                              <img
                                src={edit_pen}
                                alt="edit_pen"
                                className={css.edit_icon}
                                style={{ height: 16, width: 16 }}
                              />

                              <img
                                src={edit_text}
                                alt="edit_text"
                                className={css.edit_icon}
                                style={{ height: 20, width: 27 }}
                              />
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* end of records */}
                {/* + Record meal text */}
                <div
                  className={css.recordMealText}
                  // onClick={recordMealHeandler}
                  // name="Dinner"
                >
                  <img
                    src={plus}
                    alt="plus"
                    style={{ height: 16, width: 16 }}
                  />
                  <p
                    className={css.dairy_add_dish}
                    name="Dinner"
                    onClick={modalHandler}
                  >
                    Record your meal
                  </p>
                </div>
                {/* end of text */}
              </div>
            </div>
            {/* End of the grey block */}
          </div>

          {/* Snack List*/}
          {/* <div className={css.dairy_dish_wrapper}> */}
          <div className={css.dairy_wrapper}>
            <div className={css.dairy_wrapper_title}>
              <div className={css.dairy_title_snack}>
                <img src={snackImage} alt="snack" className={css.icon_dish} />
                <h3>Snack</h3>
              </div>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>
                  {snack2.carbonohidrates}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>
                  {snack2.protein}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>{snack2.fat}</span>
              </li>
            </ul>
          </div>

          {/* GREY BLOCK */}
          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>
            {/* meals list */}
            <div className={css.dairy_dish_list}>
              {/* Records */}
              {snack.map(record => {
                return (
                  <div className={css.record} key={record._id}>
                    <div className={css.dairy_elem_list}>
                      <div className={css.dairy_add_dish_item}>
                        <p className={css.dairy_dish_p}>{record.name}</p>
                        <img
                          src={edit_pen}
                          alt="edit_pen"
                          className={css.edit_pen}
                        />
                        <img
                          src={edit_text}
                          alt="edit_text"
                          className={css.edit_text}
                        />
                      </div>

                      <div className={css.dairy_elem_breakfast}>
                        <ul className={css.dairy_elem_breakfast_list}>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Carb.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.carbonohidrates}
                            </span>
                          </li>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Prot.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.protein}
                            </span>
                          </li>
                          <li className={css.dairy_elem_breakfast_item}>
                            <span className={css.dairy_elem_span}>Fat.</span>
                            <span className={css.dairy_elem_breakfast_span}>
                              {record.fat}
                            </span>
                          </li>
                          <div className={css.dairy_icons_edit}>
                            <img
                              src={edit_pen}
                              alt="edit_pen"
                              className={css.edit_icon}
                              style={{ height: 16, width: 16 }}
                            />

                            <img
                              src={edit_text}
                              alt="edit_text"
                              className={css.edit_icon}
                              style={{ height: 20, width: 27 }}
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* end of records */}
              {/* + Record meal text */}
              <div
                className={css.recordMealText}
                // onClick={recordMealHeandler}
                // name="Snack"
              >
                <img src={plus} alt="plus" style={{ height: 16, width: 16 }} />
                <p
                  className={css.dairy_add_dish}
                  name="Snack"
                  onClick={modalHandler}
                >
                  Record your meal
                </p>
              </div>
              {/* end of text */}
            </div>
          </div>
          {/* End of the grey block */}
        </div>
      </div>
    </section>
  );
};

export default Diary;
