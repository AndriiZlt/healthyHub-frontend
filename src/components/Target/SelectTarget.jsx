import React, { useState } from 'react';
import axios from 'axios';
import style from './target.module.css';
import Gainmuscle from './Gain muscle.png';
import Losefat from './Lose fat image men.png';
import Maintake from './Maintake image men.png';
import cross from './close-circle.svg';
import { useEffect } from 'react';

function Target() {
  const [selected, setSelected] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedGoal = localStorage.getItem('userGoal');
    if (storedGoal) {
      setSelectedOption(storedGoal);
    } else {
      getGoal();
    }
  }, []);

  const getGoal = async () => {
    try {
      const res = await axios.get(
        'https://healthy-hub.onrender.com/api/user/current'
      );
      const userGoal = res.data.goal;
      setSelectedOption(userGoal);
      localStorage.setItem('userGoal', userGoal);
    } catch (error) {
      console.error(error);
    }
  };

  const sendPatchRequest = async () => {
    try {
      const requestData = { goal: selected };
      const response = await axios.patch(
        'https://healthy-hub.onrender.com/api/user/change-goal',
        requestData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmSelection = () => {
    sendPatchRequest();
  };

  function selectOption(option) {
    setSelected(option);
  }

  return (
    <div className={style.targetContainer}>
      <ul className={style.list} style={{ listStyle: 'none', display: 'flex', padding: 0, gap: 174 }}>
        <li>
          <h1 className={style.title}>Target selection</h1>
        </li>
        <li>
          <img src={cross} alt="cross" style={{ cursor: 'pointer' }} />
        </li>
      </ul>
      <h2 className={style.description}>
        The service will adjust your calorie intake to your goal
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        <li>
          <img
            src={Losefat}
            alt="Lose fat img"
            onClick={() => {
              selectOption('Lose fat');
            }}
            className={`${style.icon} ${
              selected === 'Lose fat' ? style.selectedImage : selectedOption
            }`}
          />
          <button
            onClick={() => {
              selectOption('Lose fat');
            }}
            className={`${style.button} ${
              selected === 'Lose fat' ? style.selected : selectedOption
            }`}
          >
            Lose fat
          </button>
        </li>
        <li className={selected === 'maintain' ? style.selected : ''}>
          <img
            src={Maintake}
            alt="Maintain img"
            onClick={() => {
              selectOption('Maintain');
            }}
            className={`${style.icon} ${
              selected === 'Maintain' ? style.selectedImage : selectedOption
            }`}
          />
          <button
            onClick={() => {
              selectOption('Maintain');
            }}
            className={`${style.button} ${
              selected === 'Maintain' ? style.selected : selectedOption
            }`}
          >
            Maintain
          </button>
        </li>
        <li className={selected === 'Gain muscle' ? style.selected : ''}>
          <img
            onClick={() => {
              selectOption('Gain muscle');
            }}
            className={`${style.icon} ${
              selected === 'Gain muscle' ? style.selectedImage : selectedOption
            }`}
            src={Gainmuscle}
            alt="Gainmuscle img"
          />
          <button
            onClick={() => {
              selectOption('Gain muscle');
            }}
            className={`${style.button} ${
              selected === 'Gain muscle' ? style.selected : selectedOption
            }`}
          >
            Gain muscle
          </button>
        </li>
        <li>
          <button className={style.buttonconfirm} onClick={confirmSelection}>
            Confirm
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Target;