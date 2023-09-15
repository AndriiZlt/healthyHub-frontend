import React, { useState } from 'react';
import Image from './userGender-mobile.png';
import { Link } from 'react-router-dom';

const UserGender = () => {
  const [value, setValue] = useState();

  const Gender = {
    MALE: 'male',
    FEMALE: 'female',
  };

  return (
    <div>
      <img alt="Summer hiking" src={Image} width="200" />
      <h2>Select gender, Age</h2>
      <p>Choose a goal so that we can help you effectively</p>
      <form>
        <p>Gender</p>
        <label>
          <input
            type="radio"
            name="gender"
            value={Gender.MALE}
            defaultChecked
          />
          Lose Fat
        </label>
        <label>
          <input type="radio" name="gender" value={Gender.FEMALE} />
          Maintain
        </label>
        <label>
          Your age
          <input type="number" placeholder="Enter your age" />
        </label>

        <button>Next</button>
      </form>

      <Link to="/usergoal">Back</Link>
    </div>
  );
};

export default UserGender;
