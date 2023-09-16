import React from 'react';
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

const Home = () => {
  const breakfast = false;
  const lunch = true;
  const dinner = false;
  const snack = false;

  return (
    <div className={css.mainSection}>
      <div className={css.titleDiv}>
        <h1 className={css.title1}>Today</h1>
        <div className={css.toGoal}>
          <a href="d">On the way to the goal</a>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>

      <div className={css.media1}>
        {/* Daily goal block */}
        <div className={css.blockDailyGoal}>
          <h2 className={css.title2}>Daily goal</h2>
          <div className={css.greyBlock}>
            <div className={css.calories}>
              <img className={css.icon1} src={bubble} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle}>Calories</p>
                <p className={css.statsNumber}>1700</p>
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
          <div className={css.greyBlock}>
            <div className={css.water}>
              <img className={css.icon2} src={waterChart} alt="bubble" />
              <div className={css.stats}>
                <p className={css.statsTitle2}>Water consumption</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                >
                  <p className={css.statsWaterConsumption}>1050</p>
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
                <img src={addWaterIntake} alt="add-water-intake" />
              </div>
            </div>
          </div>
        </div>

        {/* Food Chart */}
        <div className={css.block}>
          <h2 className={css.title2}>Food</h2>
          <div className={css.greyBlock}>
            <div className={css.foodChart}>
              <img
                className={css.icon3}
                src={chartCalories}
                alt="calories-chart"
              />
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
            <a className={css.seeMore} href="d">
              See more
            </a>
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

                {breakfast ? (
                  <div className={css.mealStats}>
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 0 }}>
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
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 0 }}>
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
                {dinner ? (
                  <div className={css.mealStats}>
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 0 }}>
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
                {snack ? (
                  <div className={css.mealStats}>
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 20 }}>
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
                      <li style={{ marginBottom: 0 }}>
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
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
