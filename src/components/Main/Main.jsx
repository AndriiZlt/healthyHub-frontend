import React, { useState, useEffect } from 'react';
import css from './Main.module.css';
import arrowRight from 'assets/arrow-right.svg';
import bubble from 'assets/bubble.svg';
import milk from 'assets/milk.svg';
import waterChart from 'assets/water-chart.svg';
import addWaterIntake from 'assets/add-water-intake.svg';
import chartCalories from 'assets/chart-calories.svg';
import recordYourMeal from 'assets/recordYourMeal.svg';
import breakfastIcon from 'assets/breakfast.svg';
import lunchIcon from 'assets/lunch.svg';
import dinnerIcon from 'assets/dinner.svg';
import snackIcon from 'assets/snack.svg';
import ModalAddMeal from './ModalAddMeal';
import ModalAddWater from './ModalAddWater';
import { NavLink } from 'react-router-dom';
import { products } from 'components/RecommendedFood/RecommendedFood';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import mealsSelectors from 'redux/meals/meals-selectors';

const getRandomProducts = (data, count) => {
  const randomData = [...data];
  for (let i = randomData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomData[i], randomData[j]] = [randomData[j], randomData[i]];
  }
  return randomData.slice(0, count);
};

const data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const currentDay = useSelector(mealsSelectors.getCurrentDay);
  const [randomProducts, setRandomProducts] = useState([]);
  const [modalMealOn, setModalMealOn] = useState(false);
  const [modalWaterOn, setModalWaterOn] = useState(false);
  const breakfast = false;
  const lunch = true;
  const dinner = false;
  const snack = false;
  const [callories, setCallories] = useState(0);
  const [water, setWater] = useState(0);
  const [chartData] = useState({
    labels: data.map(item => item.year),
    datasets: [
      {
        // label: 'users gained',
        data: data.map(item => item.userGain),
        backgroundColor: ['rgba(69, 255, 188, 1)'],
        borderColor: 'black',
        borderWidth: 1,
        hoverOffset: 1,
        tension: 0.5,
      },
    ],
  });

  useEffect(() => {
    const randomProducts = getRandomProducts(products, 4);
    setRandomProducts(randomProducts);
  }, [dispatch]);

  const escHandler = e => {
    if (e.target.id === 'overlay') {
      setModalMealOn(false);
      setModalWaterOn(false);
      window.removeEventListener('keydown', escHandler);
      window.removeEventListener('click', escHandler);
    }
    if (e.code === 'Escape') {
      setModalMealOn(false);
      setModalWaterOn(false);
      window.removeEventListener('keydown', escHandler);
      window.removeEventListener('click', escHandler);
    }
  };

  const modalHandler = e => {
    e.target.id === 'meal' ? setModalMealOn(true) : setModalWaterOn(true);
    window.addEventListener('keydown', escHandler);
    window.addEventListener('click', escHandler);
  };

  return (
    <div className={css.mainSection}>
      <div className={css.titleDiv}>
        <h1 className={css.title1}>Today</h1>
        <div className={css.toGoal}>
          <NavLink to="/dashboard">On the way to the goal</NavLink>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>

      {modalMealOn && <ModalAddMeal />}
      {modalWaterOn && <ModalAddWater />}
      {/* {isLoading && <LoaderModal />} */}

      <div className={css.media1}>
        {/* Daily goal block */}
        <div className={css.blockDailyGoal}>
          <h2 className={css.title2}>Daily goal</h2>
          <div className={css.greyBlock}>
            <div className={css.calories}>
              <img className={css.icon1} src={bubble} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle}>Calories</p>
                <p className={css.statsNumber}>{callories}</p>
              </div>
            </div>
            <div className={css.water}>
              <img className={css.icon1} src={milk} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle}>Water</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p className={css.statsNumber}>{water}</p>
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
              <div className={css.chartWater}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={waterChart}
                  alt="water-chart"
                />
              </div>

              <div className={css.stats2}>
                <p className={css.statsTitle2}>Water consumption</p>
                <div className={css.media2}>
                  <div className={css.statsWater}>
                    <p className={css.statsWaterConsumption}>1050</p>
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
                      450
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
                  onClick={modalHandler}
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
              <div className={css.icon3}>
                <Doughnut data={chartData} />
              </div>

              {/* <img

                src={chartCalories}
                alt="calories-chart"
              /> */}
              <div className={css.stats}>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li>
                    <img
                      className={css.icon4}
                      src={chartCalories}
                      alt="calories-chart"
                    />
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
                            170
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
                            34
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      className={css.icon4}
                      src={chartCalories}
                      alt="calories-chart"
                    />
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
                            127.5
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
                            8
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      className={css.icon4}
                      src={chartCalories}
                      alt="calories-chart"
                    />
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
                            56
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
                            11,2
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

                {breakfast.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
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
                {lunch ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
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
                {dinner.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
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
                {snack.length !== 0 ? (
                  <div className={css.mealStats}>
                    <ul>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
                          </span>
                        </p>
                      </li>
                      <li>
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
                            60
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

          {randomProducts.map(product => (
            <div className={css.greyBlock2} key={product.name}>
              <img src={product.img} alt="fruit" />
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
                      {product.calories}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
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
