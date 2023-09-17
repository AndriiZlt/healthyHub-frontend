import React from 'react';
// import { useState } from 'react';
import axios from 'axios';
import style from './target.module.css';
import Gainmuscle from './Gain muscle.png';
import Losefat from './Lose fat image men.png';
import Maintake from './Maintake image men.png';
function Target() {
  // const [selected, setSelected] = useState(тут має отримуватися з серверу вибрана ціль);
  axios.get('');
  function confirmSelection() {}
  function selectedLoseFat() {}
  function selectedMaintain() {}
  function selectedGainmuscle() {}
  return (
    <div className={style.targetContainer}>
      <h1>Target selection</h1>
      <h2>The service will adjust your calorie intake to your goal</h2>
      <ul>
        <li>
          <img src={Losefat} alt="Lose fat img" />
          <buttton onClick={selectedLoseFat}>Lose fat</buttton>
        </li>
        <li>
          <img src={Maintake} alt="Maintake img" />
          <buttton onClick={selectedMaintain}>Maintain</buttton>
        </li>
        <li>
          <img src={Gainmuscle} alt="Gainmuscle img" />
          <buttton onClick={selectedGainmuscle}>Gain muscle</buttton>
        </li>
        <li>
          <button onClick={confirmSelection}>Confirm</button>
        </li>
      </ul>
    </div>
  );
}
export default Target;
