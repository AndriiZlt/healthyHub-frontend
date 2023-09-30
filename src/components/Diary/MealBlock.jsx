import React from 'react';
import css from './Diary.module.css';
import emptyPlate from 'assets/empty-plate.png';
import edit_pen from '../../assets/edit_pen.svg';
import edit_text from '../../assets/edit_text.svg';
import plus from '../../assets/plus.svg';

const MealBlock = props => {
  const { title, meal, calculatedData, image, editMealHandler, modalHandler } =
    props;
  return (
    <>
      <div className={css.dairy_wrapper}>
        <div className={css.dairy_wrapper_title}>
          <div className={css.dairy_title_meal}>
            <img src={image} alt="mealImage" className={css.icon_dish} />
            <h3>{title}</h3>
          </div>
        </div>

        <ul className={css.dairy_breakfast_list}>
          <li className={css.dairy_breakfast_item}>
            Carbonohidrates:
            <span className={css.dairy_breakfast_span}>
              {calculatedData.carbonohidrates}
            </span>
          </li>
          <li className={css.dairy_breakfast_item}>
            Protein:
            <span className={css.dairy_breakfast_span}>
              {calculatedData.protein}
            </span>
          </li>
          <li className={css.dairy_breakfast_item}>
            Fat:
            <span className={css.dairy_breakfast_span}>
              {calculatedData.fat}
            </span>
          </li>
        </ul>
      </div>
      <div className={css.wrapper_dishes_block}>
        <div className={css.dairy_dish_list}>
          {meal.length === 0 ? (
            <div className={css.emptyPlate}>
              <img src={emptyPlate} alt="emptyPlate" />
            </div>
          ) : (
            meal.map(record => {
              return (
                <div className={css.record} key={record._id}>
                  <div className={css.dairy_elem_list}>
                    <div className={css.dairy_add_dish_item}>
                      <p className={css.number}>{meal.indexOf(record) + 1}</p>
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

                        {/* Edit meal Div */}
                        <div
                          className={css.dairy_icons_edit}
                          id={record._id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => editMealHandler('Breakfast', record)}
                        >
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
            })
          )}

          {/* end of text */}
        </div>
        <div className={css.recordMealText}>
          <img src={plus} alt="plus" style={{ height: 16, width: 16 }} />
          <p
            className={css.dairy_add_dish}
            name={title}
            onClick={modalHandler}
            id={title}
          >
            Record your meal
          </p>
        </div>
      </div>
    </>
  );
};

export default MealBlock;
