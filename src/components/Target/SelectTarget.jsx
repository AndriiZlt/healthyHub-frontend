import React, { useState } from 'react';
import axios from 'axios';
import style from './target.module.css';
import Gainmuscle from './Gain muscle.png';
import Losefat from './Lose fat image men.png';
import Maintake from './Maintake image men.png';

function Target() {
  const [selected, setSelected] = useState(null);

  const sendPatchRequest = async () => {
    try {
      const requestData = { goal: selected };
      const response = await axios.patch(
        'https://healthy-hub.onrender.com/api/user/change-goal',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Патч-запит успішно відправлено', response);
    } catch (error) {
      console.error('Помилка при відправленні патч-запиту', error);
    }
  };

  const confirmSelection = () => {
    sendPatchRequest();
  };

  function selectedLoseFat() {
    setSelected('lose_fat');
  }

  function selectedMaintain() {
    setSelected('maintain');
  }

  function selectedGainmuscle() {
    setSelected('gain_muscle');
  }

  return (
    <div className={style.targetContainer}>
      <h1>Target selection</h1>
      <h2>The service will adjust your calorie intake to your goal</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <img src={Losefat} alt="Lose fat img" />

          <button onClick={selectedLoseFat}>Lose fat</button>
        </li>
        <li>
          <img src={Maintake} alt="Maintake img" />
          <button onClick={selectedMaintain}>Maintain</button>
        </li>
        <li>
          <img src={Gainmuscle} alt="Gainmuscle img" />
          <button onClick={selectedGainmuscle}>Gain muscle</button>
        </li>
        <li>
          <button onClick={confirmSelection}>Confirm</button>
        </li>
      </ul>
    </div>
  );
}

export default Target;
