import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './AddMeal.module.css';
import breakfast from '../../assets/breakfast.svg';
import plus from '../../assets/plus.svg';
import { useDispatch } from 'react-redux'; // eslint-disable-line no-unused-vars
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import capitalize from 'helpers/useCapitalize';
import mealsOperations from 'redux/meals/meals-operations';
import { setModalsOff } from 'redux/meals/meals-slice';
import closeCircle from 'assets/close-circle.svg';

let data = [
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
  const [div5, setDiv5] = useState('none'); // eslint-disable-line no-unused-vars
  const [div6, setDiv6] = useState('none');
  const [div7, setDiv7] = useState('none');
  const [div8, setDiv8] = useState('none');
  const [div9, setDiv9] = useState('none');
  const [div10, setDiv10] = useState('none');

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

  const [div5name, setDiv5name] = useState('');
  const [div5carb, setDiv5carb] = useState('');
  const [div5protein, setDiv5protein] = useState('');
  const [div5fat, setDiv5fat] = useState('');
  const [div5calories, setDiv5calories] = useState('');

  const [div6name, setDiv6name] = useState('');
  const [div6carb, setDiv6carb] = useState('');
  const [div6protein, setDiv6protein] = useState('');
  const [div6fat, setDiv6fat] = useState('');
  const [div6calories, setDiv6calories] = useState('');

  const [div7name, setDiv7name] = useState('');
  const [div7carb, setDiv7carb] = useState('');
  const [div7protein, setDiv7protein] = useState('');
  const [div7fat, setDiv7fat] = useState('');
  const [div7calories, setDiv7calories] = useState('');

  const [div8name, setDiv8name] = useState('');
  const [div8carb, setDiv8carb] = useState('');
  const [div8protein, setDiv8protein] = useState('');
  const [div8fat, setDiv8fat] = useState('');
  const [div8calories, setDiv8calories] = useState('');

  const [div9name, setDiv9name] = useState('');
  const [div9carb, setDiv9carb] = useState('');
  const [div9protein, setDiv9protein] = useState('');
  const [div9fat, setDiv9fat] = useState('');
  const [div9calories, setDiv9calories] = useState('');

  const [div10name, setDiv10name] = useState('');
  const [div10carb, setDiv10carb] = useState('');
  const [div10protein, setDiv10protein] = useState('');
  const [div10fat, setDiv10fat] = useState('');
  const [div10calories, setDiv10calories] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keypress', enterHandler);
    return document.removeEventListener('keypress', enterHandler);
  });

  const enterHandler = e => {
    if (e.key === 'Enter') {
      addMealHandler(e);
    }
    if (e.currentTarget.id === 'cancelMeal') {
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

    (async () => {
      for (const record of data) {
        if (record.name !== '') {
          record.mealType = title.toLowerCase();
          console.log('sending ', record);

          await dispatch(mealsOperations.recordMeal(record));
          console.log('recorder', record);
        }
      }
      Notify.success('Your meal were recorded!!!');
      dispatch(setModalsOff());
      // data = [...emptyData];
    })();
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
      case 4:
        if (
          div4name === '' ||
          div4carb === '' ||
          div4protein === '' ||
          div4protein === '' ||
          div4fat === '' ||
          div4calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv5('flex');
        setDisplay(5);
        break;

      case 5:
        if (
          div5name === '' ||
          div5carb === '' ||
          div5protein === '' ||
          div5protein === '' ||
          div5fat === '' ||
          div5calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv6('flex');
        setDisplay(6);
        break;
      case 6:
        if (
          div6name === '' ||
          div6carb === '' ||
          div6protein === '' ||
          div6protein === '' ||
          div6fat === '' ||
          div6calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv7('flex');
        setDisplay(7);
        break;

      case 7:
        if (
          div7name === '' ||
          div7carb === '' ||
          div7protein === '' ||
          div7protein === '' ||
          div7fat === '' ||
          div7calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv8('flex');
        setDisplay(8);
        break;

      case 8:
        if (
          div8name === '' ||
          div8carb === '' ||
          div8protein === '' ||
          div8protein === '' ||
          div8fat === '' ||
          div8calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv9('flex');
        setDisplay(9);
        break;

      case 9:
        if (
          div9name === '' ||
          div9carb === '' ||
          div9protein === '' ||
          div9protein === '' ||
          div9fat === '' ||
          div9calories === ''
        ) {
          Notify.warning('Fill in all fields!');
          break;
        }
        setDiv10('flex');
        setDisplay(10);
        break;

      default:
        console.log('no more meals');
        break;
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

    console.log(div, cardHeight);
  };

  const onChangeHandler = (e, value) => {
    console.log(e.target.name, e.target.id, value);
    data[Number(e.target.name)][e.target.id] = value.toString();
    console.log('data', data);
  };

  const closeHandler = () => {
    // console.log('display', display);

    switch (display) {
      case 1:
        setDiv1calories('');
        setDiv1fat('');
        setDiv1protein('');
        setDiv1carb('');
        setDiv1name('');
        data[0] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        dispatch(setModalsOff());
        break;
      case 2:
        setDiv2('none');
        setDisplay(1);
        setDiv2calories('');
        setDiv2fat('');
        setDiv2protein('');
        setDiv2carb('');
        setDiv2name('');
        data[1] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 3:
        setDiv3('none');
        setDisplay(2);
        setDiv3calories('');
        setDiv3fat('');
        setDiv3protein('');
        setDiv3carb('');
        setDiv3name('');
        data[2] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 4:
        setDiv4('none');
        setDisplay(3);
        setDiv4calories('');
        setDiv4fat('');
        setDiv4protein('');
        setDiv4carb('');
        setDiv4name('');
        data[3] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 5:
        setDiv5('none');
        setDisplay(4);
        setDiv5calories('');
        setDiv5fat('');
        setDiv5protein('');
        setDiv5carb('');
        setDiv5name('');
        data[4] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 6:
        setDiv6('none');
        setDisplay(5);
        setDiv6calories('');
        setDiv6fat('');
        setDiv6protein('');
        setDiv6carb('');
        setDiv6name('');
        data[5] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 7:
        setDiv7('none');
        setDisplay(6);
        setDiv7calories('');
        setDiv7fat('');
        setDiv7protein('');
        setDiv7carb('');
        setDiv7name('');
        data[6] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 8:
        setDiv8('none');
        setDisplay(7);
        setDiv8calories('');
        setDiv8fat('');
        setDiv8protein('');
        setDiv8carb('');
        setDiv8name('');
        data[7] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      case 9:
        setDiv9('none');
        setDisplay(8);
        setDiv9calories('');
        setDiv9fat('');
        setDiv9protein('');
        setDiv9carb('');
        setDiv9name('');
        data[8] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;

      case 10:
        setDiv10('none');
        setDisplay(9);
        setDiv10calories('');
        setDiv10fat('');
        setDiv10protein('');
        setDiv10carb('');
        setDiv10name('');
        data[9] = {
          mealType: '',
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        };
        break;
      default:
        console.log('no more meals');
        break;
    }
    console.log('data', data);
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
              className={css.remove_meal}
              onClick={enterHandler}
              id="cancelMeal"
            >
              <img
                src={closeCircle}
                alt="close-circle"
                style={{ width: 20, height: 20 }}
              />
            </div>
          </div>
          <div className={css.formDiv} id="formDiv">
            <ul className={css.formMeal} id="recordMealForm">
              {/* DIV 1 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="0"
                style={{ display: div1 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="0"
                  value={div1name}
                  onChange={e => {
                    setDiv1name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  className={css.diary_breakfast_item}
                  min="0"
                  max="500"
                  type="number"
                  placeholder="Carbons"
                  name="0"
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
                      onChangeHandler(e, value);
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
                  name="0"
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
                      onChangeHandler(e, value);
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
                  name="0"
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
                      onChangeHandler(e, value);
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
                  name="0"
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
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 2 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="1"
                style={{ display: div2 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  name="1"
                  placeholder="The name of the product or dish"
                  id="name"
                  value={div2name}
                  onChange={e => {
                    setDiv2name(capitalize(e.target.value));
                    console.log(e.target.value);
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="1"
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
                      onChangeHandler(e, value);
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
                  name="1"
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
                      onChangeHandler(e, value);
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
                  name="1"
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
                      onChangeHandler(e, value);
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
                  name="1"
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
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 3 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="2"
                style={{ display: div3 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="2"
                  value={div3name}
                  onChange={e => {
                    setDiv3name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="2"
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
                      onChangeHandler(e, value);
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
                  name="2"
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
                      onChangeHandler(e, value);
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
                  name="2"
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
                      onChangeHandler(e, value);
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
                  name="2"
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
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 4 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div4 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="3"
                  value={div4name}
                  onChange={e => {
                    setDiv4name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="3"
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
                      onChangeHandler(e, value);
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
                  name="3"
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
                      onChangeHandler(e, value);
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
                  name="3"
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
                      onChangeHandler(e, value);
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
                  name="3"
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
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 5 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div5 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="4"
                  value={div5name}
                  onChange={e => {
                    setDiv5name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="4"
                  value={div5carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv5carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv5carb(value);
                      onChangeHandler(e, value);
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
                  name="4"
                  value={div5protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv5protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv5protein(value);
                      onChangeHandler(e, value);
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
                  name="4"
                  value={div5fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv5fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv5fat(value);
                      onChangeHandler(e, value);
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
                  name="4"
                  value={div5calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv5calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv5calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 6 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div6 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="5"
                  value={div6name}
                  onChange={e => {
                    setDiv6name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="5"
                  value={div6carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv6carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv6carb(value);
                      onChangeHandler(e, value);
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
                  name="5"
                  value={div6protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv6protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv6protein(value);
                      onChangeHandler(e, value);
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
                  name="5"
                  value={div6fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv6fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv6fat(value);
                      onChangeHandler(e, value);
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
                  name="5"
                  value={div6calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv6calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv6calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 7 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div7 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="6"
                  value={div7name}
                  onChange={e => {
                    setDiv7name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="6"
                  value={div7carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv7carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv7carb(value);
                      onChangeHandler(e, value);
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
                  name="6"
                  value={div7protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv7protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv7protein(value);
                      onChangeHandler(e, value);
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
                  name="6"
                  value={div7fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv7fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv7fat(value);
                      onChangeHandler(e, value);
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
                  name="6"
                  value={div7calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv7calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv7calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 8 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div8 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="7"
                  value={div8name}
                  onChange={e => {
                    setDiv8name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="7"
                  value={div8carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv8carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv8carb(value);
                      onChangeHandler(e, value);
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
                  name="7"
                  value={div8protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv8protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv8protein(value);
                      onChangeHandler(e, value);
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
                  name="7"
                  value={div8fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv8fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv8fat(value);
                      onChangeHandler(e, value);
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
                  name="7"
                  value={div8calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv8calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv8calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 9 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div9 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="8"
                  value={div9name}
                  onChange={e => {
                    setDiv9name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="8"
                  value={div9carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv9carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv9carb(value);
                      onChangeHandler(e, value);
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
                  name="8"
                  value={div9protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv9protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv9protein(value);
                      onChangeHandler(e, value);
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
                  name="8"
                  value={div9fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv9fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv9fat(value);
                      onChangeHandler(e, value);
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
                  name="8"
                  value={div9calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv9calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv9calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* DIV 10 */}
              <li
                className={css.diary_breakfast_list}
                name="meal"
                id="3"
                style={{ display: div10 }}
              >
                <input
                  className={css.diary_breakfast_item}
                  type="text"
                  placeholder="The name of the product or dish"
                  id="name"
                  name="9"
                  value={div10name}
                  onChange={e => {
                    setDiv10name(capitalize(e.target.value));
                    onChangeHandler(e, capitalize(e.target.value));
                  }}
                />

                <input
                  min="0"
                  max="500"
                  className={css.diary_breakfast_item}
                  type="number"
                  placeholder="Carbons"
                  id="carbonohidrates"
                  name="9"
                  value={div10carb}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv10carb('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv10carb(value);
                      onChangeHandler(e, value);
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
                  name="9"
                  value={div10protein}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv10protein('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv10protein(value);
                      onChangeHandler(e, value);
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
                  name="9"
                  value={div10fat}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv10fat('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(1000, Number(e.target.value))
                      );
                      setDiv10fat(value);
                      onChangeHandler(e, value);
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
                  name="9"
                  value={div10calories}
                  onChange={e => {
                    if (e.target.value === '0' || e.target.value === '') {
                      setDiv10calories('');
                    } else {
                      const value = Math.max(
                        0,
                        Math.min(3000, Number(e.target.value))
                      );
                      setDiv10calories(value);
                      onChangeHandler(e, value);
                    }
                  }}
                />
              </li>

              {/* end of blocks */}
            </ul>
          </div>

          <div className={css.buttons}>
            <div className={css.remove_meal_bottom} onClick={closeHandler}>
              <img
                src={closeCircle}
                alt="close-circle"
                style={{ width: 32, height: 32, marginRight: 10 }}
              />
              Remove last
            </div>
            <div className={css.remove_meal_bottom} onClick={addMealHandler}>
              <img
                src={plus}
                alt="plus"
                // className={css.plus}
                style={{ width: 32, height: 32, marginRight: 10 }}
              />
              Add
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
