import React from 'react';
import illustration from '../../assets/SettingsIllustration.svg';
import download from '../../assets/direct-inbox.svg';
import css from './Settings.module.css';

const Settings = () => {
  return (
    <div className={css.conteiner}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Profile setting</h1>
        <div className={css.buttonsTablet}>
          <button className={css.buttonCancel} type="submit">
            Cancel
          </button>
          <button className={css.buttonSave} type="submit">
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
                required
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
                required
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
                  variant="male"
                  className={css.inputGender}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  variant="female"
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
                name="userheight"
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
                name="userweight"
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
              <input type="radio" name="activity" value="1.2" />
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.375" />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.55" />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.725" />
              1.725 ​​- if you train fully 6-7 times a week
            </label>
            <label className={css.labelActivity}>
              <input type="radio" name="activity" value="1.9" />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
        </div>
        <div className={css.buttons}>
          <button className={css.buttonSave} type="submit">
            Save
          </button>
          <button className={css.buttonCancel} type="submit">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
