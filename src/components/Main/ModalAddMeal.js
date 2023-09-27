import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './AddMeal.module.css';
import breakfast from '../../assets/breakfast.svg';
import plus from '../../assets/plus.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // eslint-disable-line no-unused-vars
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import capitalize from 'helpers/useCapitalize';
import mealsOperations from 'redux/meals/meals-operations';
import { setModalsOff } from 'redux/meals/meals-slice';
const data = [
  {
    mealType: '',
    name: '',
    carbonohidrates: '',
    protein: '',
    fat: '',
    calories: '',
  },
  {
    mealType: '',
    name: '',
    carbonohidrates: '',
    protein: '',
    fat: '',
    calories: '',
  },
  {
    mealType: '',
    name: '',
    carbonohidrates: '',
    protein: '',
    fat: '',
    calories: '',
  },
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
  const [div1, setDiv1] = useState('flex'); // eslint-disable-line no-unused-vars
  const [div2, setDiv2] = useState('none');
  const [div3, setDiv3] = useState('none');
  const [div4, setDiv4] = useState('none');

  const [display, setDisplay] = useState(1);

  const [div2name, setDiv2name] = useState('');
  const [div2carb, setDiv2carb] = useState('');
  const [div2protein, setDiv2protein] = useState('');
  const [div2fat, setDiv2fat] = useState('');
  const [div2calories, setDiv2calories] = useState('');

  const [div1name, setDiv1name] = useState('');
  const [div1carb, setDiv1carb] = useState('');
  const [div1protein, setDiv1protein] = useState('');
  const [div1fat, setDiv1fat] = useState('');
  const [div1calories, setDiv1calories] = useState('');

  const [div3name, setDiv3name] = useState('');
  const [div3carb, setDiv3carb] = useState('');
  const [div3protein, setDiv3protein] = useState('');
  const [div3fat, setDiv3fat] = useState('');
  const [div3calories, setDiv3calories] = useState('');

  const [div4name, setDiv4name] = useState('');
  const [div4carb, setDiv4carb] = useState('');
  const [div4protein, setDiv4protein] = useState('');
  const [div4fat, setDiv4fat] = useState('');
  const [div4calories, setDiv4calories] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keypress', enterHandler);
    return document.removeEventListener('keypress', enterHandler);
  });

  const enterHandler = e => {
    if (e.key === 'Enter') {
      addMealHandler(e);
    }
    if (e.target.id === 'cancelMeal') {
      dispatch(setModalsOff());
    }
  };

  Notiflix.Notify.init({
    zindex: 9999999,
  });

  const formSubmitHandler = async () => {
    if (display === 1) {
      if (
        div1name === '' ||
        div1carb === '' ||
        div1protein === '' ||
        div1protein === '' ||
        div1fat === '' ||
        div1calories === ''
      ) {
        Notify.warning('Fill in all fields!');
        return;
      }
    } else if (display === 2) {
      if (
        div2name === '' ||
        div2carb === '' ||
        div2protein === '' ||
        div2protein === '' ||
        div2fat === '' ||
        div2calories === ''
      ) {
        Notify.warning('Fill in all fields!');
        return;
      }
    } else if (display === 3) {
      if (
        div3name === '' ||
        div3carb === '' ||
        div3protein === '' ||
        div3protein === '' ||
        div3fat === '' ||
        div3calories === ''
      ) {
        Notify.warning('Fill in all fields!');
        return;
      }
    } else if (display === 4) {
      if (
        div4name === '' ||
        div4carb === '' ||
        div4protein === '' ||
        div4protein === '' ||
        div4fat === '' ||
        div4calories === ''
      ) {
        Notify.warning('Fill in all fields!');
        return;
      }
    }

    const title = document.getElementById('mealTitle').innerHTML; // eslint-disable-line no-unused-vars
    dispatch(setModalsOff());
    for (const record of data) {
      if (record.name !== '') {
        record.mealType = title.toLowerCase();
        dispatch(mealsOperations.recordMeal(record)).then(() => {
          Notify.success('Your meal was recorded!!!');
        });
      }
    }
  };

  const addMealHandler = () => {
    switch (display) {
      case 1:
        if (
          div1name === '' ||
          div1carb === '' ||
          div1protein === '' ||
          div1protein === '' ||
          div1fat === '' ||
          div1calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv2('flex');
        setDisplay(2);
        break;
      case 2:
        if (
          div2name === '' ||
          div2carb === '' ||
          div2protein === '' ||
          div2protein === '' ||
          div2fat === '' ||
          div2calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv3('flex');
        setDisplay(3);
        break;
      case 3:
        if (
          div3name === '' ||
          div3carb === '' ||
          div3protein === '' ||
          div3protein === '' ||
          div3fat === '' ||
          div3calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv4('flex');
        setDisplay(4);
        break;
      default:
        console.log('no more meals');
        break;
    }
  };

  const onChangeHandler = e => {
    data[e.currentTarget.id][e.target.id] = e.target.value;
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
          </div>
          <div className={css.formDiv}>
            <div className={css.formMeal} id="recordMealForm">
              {/* DIV 1 */}
              <div
                className={css.diary_breakfast_list}
                name="meal"
                id="0"
                onChange={onChangeHandler}
                style={{ display: div1 }}
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
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv1carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv1carb(value);
                    }
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
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv1protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv1protein(value);
                    }
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
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv1fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv1fat(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="1500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Calories"
                  id="calories"
                  value={div1calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv1calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv1calories(value);
                    }
                  }}
                />
              </div>

              {/* DIV 2 */}
              <div
                className={css.diary_breakfast_list}
                name="meal"
                id="2"
                onChange={onChangeHandler}
                style={{ display: div2 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  value={div2name}
                  onChange={e => {
                    setDiv2name(capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbonoh"
                  id="carbonohidrates"
                  value={div2carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv2carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv2carb(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Protein"
                  id="protein"
                  value={div2protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv2protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv2protein(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Fat"
                  id="fat"
                  value={div2fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv2fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv2fat(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="1500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Calories"
                  id="calories"
                  value={div2calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv2calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv2calories(value);
                    }
                  }}
                />
              </div>

              {/* DIV 3 */}
              <div
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                onChange={onChangeHandler}
                style={{ display: div3 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  value={div3name}
                  onChange={e => {
                    setDiv3name(capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbonoh"
                  id="carbonohidrates"
                  value={div3carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv3carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv3carb(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Protein"
                  id="protein"
                  value={div3protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv3protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv3protein(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Fat"
                  id="fat"
                  value={div3fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv3fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv3fat(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="1500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Calories"
                  id="calories"
                  value={div3calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv3calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv3calories(value);
                    }
                  }}
                />
              </div>

              {/* DIV 4 */}
              <div
                className={css.diary_breakfast_list}
                name="meal"
                id="4"
                onChange={onChangeHandler}
                style={{ display: div4 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  value={div4name}
                  onChange={e => {
                    setDiv4name(capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbonoh"
                  id="carbonohidrates"
                  value={div4carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv4carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv4carb(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Protein"
                  id="protein"
                  value={div4protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv4protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv4protein(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Fat"
                  id="fat"
                  value={div4fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv4fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv4fat(value);
                    }
                  }}
                />

                <input
                  min="0"
                  max="1500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Calories"
                  id="calories"
                  value={div4calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv4calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv4calories(value);
                    }
                  }}
                />
              </div>
            </div>

            <div className={css.diary_add_meal_wrapper}>
              <NavLink className={css.diary_add_meal} onClick={addMealHandler}>
                <img
                  src={plus}
                  alt="plus"
                  className={css.plus}
                  style={{ height: 16, width: 16 }}
                />
                Add more
              </NavLink>
            </div>
          </div>

          <div className={css.buttons}>
            <button
              type="button"
              id="cancelMeal"
              onClick={enterHandler}
              className={css.btn}
            >
              Cancel
            </button>
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
