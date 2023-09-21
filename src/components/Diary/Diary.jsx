import React from 'react';
// import { useState } from 'react';
import css from './Diary.module.css';
// import recordMealModal from './recordMealModal';
import arrow_rigth from '../../assets/arrow-back.svg';
import breakfast from '../../assets/breakfast.svg';
import lunch from '../../assets/lunch.svg';
import diner from '../../assets/dinner.svg';
import snack from '../../assets/snack.svg';
import edit_pen from '../../assets/edit_pen.svg';
import edit_text from '../../assets/edit_text.svg';
import plus from '../../assets/plus.svg';

const Diary = () => {

  // const [recordMealModal, recordMeal] = useState(false);

  return (
    <section className={css.section}>
      <div className={css.dairy_title}>
        <a href="a">
          <img
            src={arrow_rigth}
            alt="arrow-rigth"
            className={css.arrow_rigth}
          />
        </a>
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
                    src={breakfast}
                    alt="breakfast"
                    className={css.icon_dish}
                  />
                  <h3>Breakfast</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>11.2</span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>23.1</span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>14</span>
                </li>
              </ul>
            </div>

            {/* Item 1 */}
            <div className={css.wrapper_dishes_block}>
              <ul className={css.dairy_dish_list}>
                <div className={css.dairy_elem_list}>
                  <li className={css.dairy_add_dish_item}>
                    <span>1</span>
                    <p className={css.dairy_dish_p}>English breakfast</p>
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
                  </li>

                  <div className={css.dairy_elem_breakfast}>
                    <ul className={css.dairy_elem_breakfast_list}>
                      <li className={css.dairy_elem_breakfast_item}>
                        <span className={css.dairy_elem_span}>Carb.</span>
                        <span className={css.dairy_elem_breakfast_span}>
                          11.2
                        </span>
                      </li>
                      <li className={css.dairy_elem_breakfast_item}>
                        <span className={css.dairy_elem_span}>Prot.</span>
                        <span className={css.dairy_elem_breakfast_span}>
                          23.1
                        </span>
                      </li>
                      <li className={css.dairy_elem_breakfast_item}>
                        <span className={css.dairy_elem_span}>Fat.</span>
                        <span className={css.dairy_elem_breakfast_span}>
                          14.7
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
                {/* Item 2 */}
                <li className={css.dairy_add_dish_item}>
                  <span>2</span>
                  <img
                    src={plus}
                    alt="plus"
                    style={{ height: 16, width: 16 }}
                  />
                  <p className={css.dairy_add_dish}>Record your meal</p>
                </li>

                {/* Item 3 */}
                <li className={css.dairy_add_dish_item}>
                  <span>3</span>
                </li>
                {/* Item 4 */}
                <li className={css.dairy_add_dish_item}>
                  <span>4</span>
                </li>
              </ul>
            </div>
          </div>

          {/* {Lunch List} */}
          {/* <div className={css.dairy_dish_wrapper}> */}
          <div className={css.dairy_wrapper}>
            <div className={css.dairy_title_lunch}>
              <img src={lunch} alt="lunch" className={css.icon_dish} />
              <h3>Lunch</h3>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>26.9</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>11.01</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>15.07</span>
              </li>
            </ul>
          </div>

          {/* Item 1 */}
          <div className={css.wrapper_dishes_block}>
            <ul className={css.dairy_dish_list}>
              <div className={css.dairy_elem_list}>
                <li className={css.dairy_add_dish_item}>
                  <span>1</span>
                  <p className={css.dairy_dish_p}>Pasta carbonara</p>
                  <img src={edit_pen} alt="edit_pen" className={css.edit_pen} />
                  <img
                    src={edit_text}
                    alt="edit_text"
                    className={css.edit_text}
                  />
                </li>

                <div className={css.dairy_elem_breakfast}>
                  <ul className={css.dairy_elem_breakfast_list}>
                    <li className={css.dairy_elem_breakfast_item}>
                      <span className={css.dairy_elem_span}>Carb.</span>
                      <span className={css.dairy_elem_breakfast_span}>
                        26.9
                      </span>
                    </li>
                    <li className={css.dairy_elem_breakfast_item}>
                      <span className={css.dairy_elem_span}>Prot.</span>
                      <span className={css.dairy_elem_breakfast_span}>
                        11.2
                      </span>
                    </li>
                    <li className={css.dairy_elem_breakfast_item}>
                      <span className={css.dairy_elem_span}>Fat.</span>
                      <span className={css.dairy_elem_breakfast_span}>
                        15.07
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

              {/* Item 2 */}
              <li className={css.dairy_add_dish_item}>
                <span>2</span>
                <img src={plus} alt="plus" style={{ height: 16, width: 16 }} />
                <p className={css.dairy_add_dish}>Record your meal</p>
              </li>
              {/* Item 3 */}
              <li className={css.dairy_add_dish_item}>
                <span>3</span>
              </li>
              {/* Item 4 */}
              <li className={css.dairy_add_dish_item}>
                <span>4</span>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>

        {/* Diner List */}
        <div className={css.wrapper_dishes}>
          <div className={css.dairy_dish_wrapper}>
            <div className={css.dairy_wrapper}>
              <div className={css.dairy_wrapper_title}>
                <div className={css.dairy_title_dinner}>
                  <img src={diner} alt="diner" className={css.icon_dish} />
                  <h3>Diner</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>0</span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>0</span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>0</span>
                </li>
              </ul>
            </div>

            {/* Item 1 */}
            <div className={css.wrapper_dishes_block}>
              <ul className={css.dairy_dish_list}>
                <li className={css.dairy_add_dish_item}>
                  <li></li>
                  <span>1</span>
                  <a href="a">
                    <img
                      src={plus}
                      alt="plus"
                      style={{ height: 16, width: 16 }}
                    />
                    <span className={css.dairy_add_dish}>Record your meal</span>
                  </a>
                </li>

                {/* Item 2 */}
                <li className={css.dairy_add_dish_item}>
                  <span>2</span>
                </li>

                {/* Item 3 */}
                <li className={css.dairy_add_dish_item}>
                  <span>3</span>
                </li>
                {/* Item 4 */}
                <li className={css.dairy_add_dish_item}>
                  <span>4</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Snack List*/}
          {/* <div className={css.dairy_dish_wrapper}> */}
          <div className={css.dairy_wrapper}>
            <div className={css.dairy_wrapper_title}>
              <div className={css.dairy_title_snack}>
                <img src={snack} alt="snack" className={css.icon_dish} />
                <h3>Snack</h3>
              </div>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>0</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>0</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>0</span>
              </li>
            </ul>
          </div>
          {/* Item 1 */}
          <div className={css.wrapper_dishes_block}>
            <ul className={css.dairy_dish_list}>
              <li className={css.dairy_add_dish_item}>
                <span>1</span>
                <a href="a">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ height: 16, width: 16 }}
                  />
                  <span className={css.dairy_add_dish}>Record your meal</span>
                </a>
              </li>

              {/* Item 2 */}
              <li className={css.dairy_add_dish_item}>
                <span>2</span>
              </li>

              {/* Item 3 */}
              <li className={css.dairy_add_dish_item}>
                <span>3</span>
              </li>
              {/* Item 4 */}
              <li className={css.dairy_add_dish_item}>
                <span>4</span>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diary;
