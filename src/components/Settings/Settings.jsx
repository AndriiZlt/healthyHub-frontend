import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import settingsOperations from '../../redux/settings/settings-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import illustration from '../../assets/SettingsIllustration.svg';
import download from '../../assets/direct-inbox.svg';
import css from './Settings.module.css';

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name, age, gender, height, weight, activity } = useSelector(authSelectors.getUser);
    const [formData, setFormData] = useState({ name, age, gender, height, weight, activity });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSave = (e) => {
    dispatch(settingsOperations.saveSettings(formData));
    navigate('/main');
    };
  
    const handleCancel = () => {
    setFormData({ name, age, gender, height, weight, activity });
    dispatch(settingsOperations.cancelSettings());
     };

  return (
    <div className={css.conteiner}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Profile setting</h1>
        <div className={css.buttonsTablet}>
          <button className={css.btn} type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className={css.btnActive} type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className={css.desktop}>
        <img
          className={css.mainImage}
          src={illustration}
          alt="settings illustration"
        ></img>
        <div>
          <form className={css.form}>
            <div>
              <label htmlFor="name" className={css.label}>
                Your name
              </label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={css.input}
              />
            </div>
            <div>
              <label htmlFor="photo" className={css.label}>
                Your photo
              </label>
              <div className={css.photo}>
                <img
                  className={css.download}
                  src={download}
                  alt="download illustration"
                ></img>
                <a href=" " className={css.link}>
                  Download new photo
                </a>
              </div>
            </div>
            <div>
              <label htmlFor="age" className={css.label}>
                Your age
              </label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className={css.input}
              />
            </div>
            <div>
              <label htmlFor="gender" className={css.label}>
                Gender
              </label>
              <label className={css.labelGender}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                onChange={handleChange}
                  className={css.inputGender}
                />
                Male
              </label>
              <label className={css.labelGender}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                onChange={handleChange}
                  className={css.inputGender}
                />
                Female
              </label>
            </div>
            <div>
              <label htmlFor="height" className={css.label}>
                Height
              </label>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter your height"
                className={css.input}
              />
            </div>
            <div>
              <label htmlFor="weight" className={css.label}>
                Weight
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter your weight"
                className={css.input}
              />
            </div>
          </form>
          <div className={css.activity}>
            <label htmlFor="activity" className={css.label}>
              Your activity
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.2" 
             checked={formData.activity === '1.2'}
              onChange={handleChange}/>
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.375"
              checked={formData.activity === '1.375'}
              onChange={handleChange} />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.55"
              checked={formData.activity === '1.55'}
              onChange={handleChange} />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.725"
              checked={formData.activity === '1.725'}
              onChange={handleChange} />
              1.725 ​​- if you train fully 6-7 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.9"
              checked={formData.activity === '1.9'}
              onChange={handleChange} />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
        </div>
        <div className={css.buttons}>
          <button className={css.btnActive} type="button" onClick={handleSave}>
            Save
          </button>
          <button className={css.btn} type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
