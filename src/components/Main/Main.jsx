import React, { useState, useEffect } from 'react';
import css from './Main.module.css';
import arrowRight from 'assets/arrow-right.svg';
import bubble from 'assets/bubble.svg';
import milk from 'assets/milk.svg';
import addWaterIntake from 'assets/add-water-intake.svg';
import recordYourMeal from 'assets/recordYourMeal.svg';
import breakfastIcon from 'assets/breakfast.svg';
import lunchIcon from 'assets/lunch.svg';
import dinnerIcon from 'assets/dinner.svg';
import snackIcon from 'assets/snack.svg';
import ModalAddMeal from './ModalAddMeal';
import ModalAddWater from './ModalAddWater';
import { NavLink } from 'react-router-dom';
import { products } from 'components/RecommendedFood/RecommendedFood';
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-line no-unused-vars
import mealsSelectors from 'redux/meals/meals-selectors';
import useCalcBMR from 'helpers/useCalcBmr';
import useCalculatedData from 'helpers/useCalculatedData';
import useCalcNutrientsGoal from 'helpers/useCalcNutrientsGoal';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  setModalsOff,
  setModalMealOn,
  setModalWaterOn,
} from 'redux/meals/meals-slice';

const getRandomProducts = (data, count) => {
  const randomData = [...data];
  for (let i = randomData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomData[i], randomData[j]] = [randomData[j], randomData[i]];
  }
  return randomData.slice(0, count);
};

const Home = () => {
  const dispatch = useDispatch();
  const today = useSelector(mealsSelectors.getCurrentDay);
  const [randomProducts, setRundomProducts] = useState([]);
  const [mealTitle, setMealTitle] = useState('');
  const modalWaterOn = useSelector(mealsSelectors.getModalWaterOn);
  const modalMealOn = useSelector(mealsSelectors.getModalMealOn);
  useEffect(() => {
    setRundomProducts(getRandomProducts(products, 4));
  }, []);

  if (modalMealOn || modalWaterOn) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  const { water = 0 } = today;
  const waterPercetage = Math.floor((water / 1500) * 100);
  const waterHeight = Math.min(Math.floor(176 * (waterPercetage / 100)), 177);
  // eslint-disable--line
  const {
    breakfast,
    lunch,
    dinner,
    snack,
    calories, // eslint-disable-line
    carbonohidrates, // eslint-disable-line
    protein, // eslint-disable-line
    fat, // eslint-disable-line
  } = useCalculatedData();

  const { carbsGoal, proteinGoal, fatGoal } = useCalcNutrientsGoal();

  const escHandler = e => {
    if (
      e.target.id === 'overlay' ||
      e.code === 'Escape' ||
      e.target.id === 'cancelWater' ||
      e.target.id === 'cancelMeal'
    ) {
      dispatch(setModalsOff());
      window.removeEventListener('keydown', escHandler);
      window.removeEventListener('click', escHandler);
    }
  };

  const modalWaterHandler = () => {
    dispatch(setModalWaterOn());
    window.addEventListener('keydown', escHandler);
    window.addEventListener('click', escHandler);
  };

  const modalHandler = e => {
    setMealTitle(e.target.name);
    dispatch(setModalMealOn());
    window.addEventListener('keydown', escHandler);
    window.addEventListener('click', escHandler);
  };

  const caloriesGoal = useCalcBMR();
  const percentageCalories = (calories / caloriesGoal) * 100;
  const percentageFat = Math.min(Math.floor((fat / fatGoal) * 100), 100);
  const percentageProtein = Math.min(
    Math.floor((protein / proteinGoal) * 100),
    100
  );
  const percentageCarbs = Math.min(
    Math.floor((carbonohidrates / carbsGoal) * 100),
    100
  );
  return (
    <div className={css.mainSection}>
      <div className={css.titleDiv}>
        <h1 className={css.title1}>Today</h1>
        <div className={css.toGoal}>
          <NavLink to="/dashboard">
            On the way to the goal
            <img src={arrowRight} alt="arrow-right" />
          </NavLink>
        </div>
      </div>

      {modalMealOn && <ModalAddMeal title={mealTitle} />}

      {modalWaterOn && <ModalAddWater />}

      <div className={css.media1}>
        {/* Daily goal block */}
        <div className={css.blockDailyGoal}>
          <h2 className={css.title2}>Daily goal</h2>
          <div className={css.greyBlock}>
            <div className={css.calories}>
              <img className={css.icon1} src={bubble} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle}>Calories</p>
                <p className={css.statsNumber}>{caloriesGoal}</p>
              </div>
            </div>
            <div className={css.water}>
              <img className={css.icon1} src={milk} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle}>Water</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p className={css.statsNumber}>1500</p>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: 400,
                    }}
                  >
                    ml
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Water block */}
        <div className={css.blockWater}>
          <h2 className={css.title2}>Water</h2>
          <div className={css.greyBlockWater}>
            <div className={css.water}>
              <div className={css.waterGlass}>
                <div className={css.waterWrapper}>
                  <p className={css.percent}>
                    {Math.min(waterPercetage, 100)}%
                  </p>
                  <div
                    className={css.waterLevel}
                    style={{ height: waterHeight }}
                  ></div>
                </div>
              </div>

              <div className={css.stats2}>
                <p className={css.statsTitle2}>Water consumption</p>
                <div className={css.media2}>
                  <div className={css.statsWater}>
                    <p className={css.statsWaterConsumption}>{water}</p>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: '#B6B6B6 ',
                      }}
                    >
                      ml
                    </p>
                  </div>
                  <p className={css.left}>
                    left:
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 500,
                        color: '#B6B6B6',
                        marginRight: 4,
                        marginLeft: 4,
                      }}
                    >
                      {Math.max(1500 - water, 0)}
                    </span>
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 500,
                        color: '#B6B6B6',
                      }}
                    >
                      ml
                    </span>
                  </p>
                </div>
                <img
                  src={addWaterIntake}
                  alt="add-water-intake"
                  id="water"
                  onClick={modalWaterHandler}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Food Chart */}
        <div className={css.blockFood}>
          <h2 className={css.title2}>Food</h2>
          <div className={css.greyBlockFood}>
            <div className={css.foodChart}>
              <div className={css.progressbarBig}>
                <CircularProgressbarWithChildren
                  value={percentageCalories}
                  styles={buildStyles({
                    textSize: '14px',
                    pathColor: calories < caloriesGoal ? '#45FFBC' : 'tomato',
                    textColor: '#B6B6B6',
                    trailColor: '#292928',
                    backgroundColor: '#3e98c7',
                    strokeWidth: 8,
                  })}
                >
                  <div className={css.info}>
                    <p className={css.numberCalories}>
                      {Math.min(calories, 9999)}
                    </p>
                    <p className={css.textCalories}>calories</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <div className={css.stats}>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li>
                    <div className={css.progressbar}>
                      <CircularProgressbar
                        value={percentageCarbs}
                        text={` ${percentageCarbs}%`}
                        styles={buildStyles({
                          textSize: '28px',
                          pathColor:
                            percentageCarbs < 100 ? '#FFC4F7' : 'tomato',
                          textColor: '#B6B6B6',
                          trailColor: '#292928',
                        })}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}
                    >
                      <p className={css.statsTitle3}>Corbonohidrates</p>
                      <div style={{ display: 'flex' }}>
                        <p className={css.goal}>
                          Goal:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {carbsGoal}
                          </span>
                        </p>
                        <p className={css.left2}>
                          left:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {Math.max(carbsGoal - carbonohidrates, 0)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={css.progressbar}>
                      <CircularProgressbar
                        value={percentageProtein}
                        text={` ${percentageProtein}%`}
                        styles={buildStyles({
                          textSize: '28px',
                          pathColor:
                            percentageProtein < 100 ? '#FFF3B7' : 'tomato',
                          textColor: '#B6B6B6',
                          trailColor: '#292928',
                        })}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}
                    >
                      <p className={css.statsTitle3}>Protein</p>
                      <div style={{ display: 'flex' }}>
                        <p className={css.goal}>
                          Goal:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {proteinGoal}
                          </span>
                        </p>
                        <p className={css.left2}>
                          left:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {Math.max(proteinGoal - protein, 0)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={css.progressbar}>
                      <CircularProgressbar
                        value={percentageFat}
                        text={` ${percentageFat}%`}
                        styles={buildStyles({
                          textSize: '28px',
                          pathColor: percentageFat < 100 ? '#B6B6B6' : 'tomato',
                          textColor: '#B6B6B6',
                          trailColor: '#292928',
                        })}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}
                    >
                      <p className={css.statsTitle3}>Fat</p>
                      <div style={{ display: 'flex' }}>
                        <p className={css.goal}>
                          Goal:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {fatGoal}
                          </span>
                        </p>
                        <p className={css.left2}>
                          left:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {Math.max(fatGoal - fat, 0)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Diary Block */}
        <div className={css.diaryBlock}>
          <div className={css.titleDiv2}>
            <h2 className={css.title3}>Diary</h2>
            <NavLink className={css.seeMore} to="/diary">
              See more
            </NavLink>
          </div>
          {/* Breakfast */}
          <div className={css.mealBlock}>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <div className={css.mealTitle}>
                  <img
                    src={breakfastIcon}
                    alt="breakfast"
                    style={{ marginRight: 12 }}
                  />
                  <p className={css.statsTitle3}>Breakfast</p>
                </div>

                {today.breakfast.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Carbonohidrates:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {breakfast.carbonohidrates}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Protein:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {breakfast.protein}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Fat:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {breakfast.fat}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <img
                    style={{ width: 150, height: 20 }}
                    src={recordYourMeal}
                    alt="record-your-meal"
                    id="meal"
                    name="Breakfast"
                    onClick={modalHandler}
                  />
                )}
              </li>

              {/* Lunch */}
              <li>
                <div className={css.mealTitle}>
                  <img
                    src={lunchIcon}
                    alt="lunch"
                    style={{ marginRight: 12 }}
                  />
                  <p className={css.statsTitle3}>Lunch</p>
                </div>
                {today.lunch.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Carbonohidrates:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {lunch.carbonohidrates}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Protein:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {lunch.protein}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Fat:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {lunch.fat}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <img
                    style={{ width: 150, height: 20 }}
                    src={recordYourMeal}
                    alt="record-your-meal"
                    id="meal"
                    name="Lunch"
                    onClick={modalHandler}
                  />
                )}
              </li>

              {/* Dinner */}
              <li>
                <div className={css.mealTitle}>
                  <img
                    src={dinnerIcon}
                    alt="dinner"
                    style={{ marginRight: 12 }}
                  />
                  <p className={css.statsTitle3}>Dinner</p>
                </div>
                {today.dinner.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Carbonohidrates:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {dinner.carbonohidrates}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Protein:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {dinner.protein}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Fat:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {dinner.fat}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <img
                    style={{ width: 150, height: 20 }}
                    src={recordYourMeal}
                    alt="record-your-meal"
                    id="meal"
                    name="Dinner"
                    onClick={modalHandler}
                  />
                )}
              </li>

              {/* Snack */}
              <li>
                <div className={css.mealTitle}>
                  <img
                    src={snackIcon}
                    alt="snack"
                    style={{ marginRight: 12 }}
                  />
                  <p className={css.statsTitle3}>Snack</p>
                </div>
                {today.snack.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Carbonohidrates:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {snack.carbonohidrates}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Protein:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {snack.protein}
                          </span>
                        </p>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <p className={css.mealRecord}>
                          Fat:
                          <span
                            style={{
                              fontSize: '14px',
                              lineHeight: '20px',
                              fontWeight: 500,
                              color: '#B6B6B6',
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                          >
                            {snack.fat}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <img
                    style={{ width: 150, height: 20 }}
                    src={recordYourMeal}
                    alt="record-your-meal"
                    id="meal"
                    name="Snack"
                    onClick={modalHandler}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Recommended food block */}
        <div className={css.recommendedBlock}>
          <div className={css.titleDiv2}>
            <h2 className={css.title3}>Recommended food</h2>
          </div>
          <ul className={css.recommendedFoodUl}>
            {randomProducts.map(product => (
              <li className={css.greyBlock2} key={product.name}>
                <img src={product.img} alt="fruit" style={{ weight: 46 }} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <p className={css.statsTitle3}>{product.name}</p>
                  <div style={{ display: 'flex' }}>
                    <p className={css.fruitStats}>
                      {product.amount}
                      <span
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 500,
                          color: '#B6B6B6',
                          marginLeft: 6,
                        }}
                      >
                        {product.calories} calories
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={css.seeMore2}>
            <NavLink to="/recommended">See more</NavLink>
            <img src={arrowRight} alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
