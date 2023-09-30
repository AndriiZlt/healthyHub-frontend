import React, { useEffect, useState } from 'react';
import css from './AddMeal.module.css';
import capitalize from 'helpers/useCapitalize';
import closeCircle from 'assets/close-circle.svg';
import useMediaQuery from 'helpers/useMediaQuery';

const InputModalElement = props => {
  const { onChangeHandler, closeHandler, values } = props;
  const [name, setName] = useState('');
  const [carbs, setCarbs] = useState('');
  const [proteins, setProteins] = useState('');
  const [fats, setFats] = useState(values.fat);
  const [calories, setCalories] = useState('');
  const isMobile = useMediaQuery('(max-width:833px');

  useEffect(() => {
    setName(values.name);
    setCarbs(values.carbonohidrates);
    setProteins(values.protein);
    setFats(values.fat);
    setCalories(values.calories);
  }, [
    values.calories,
    values.carbonohidrates,
    values.fat,
    values.name,
    values.protein,
  ]);

  return (
    <div className={css.diary_breakfast_list} name="meal" id={props.id}>
      <input
        className={css.diary_breakfast_item}
        type="text"
        placeholder="Name of the product or dish"
        id="name"
        name={props.id}
        value={name}
        onChange={e => {
          setName(capitalize(e.target.value));
          onChangeHandler(e, capitalize(e.target.value));
        }}
      />

      <input
        className={css.diary_breakfast_item}
        min="0"
        max="500"
        type="number"
        placeholder="Carboh"
        name={props.id}
        id="carbonohidrates"
        value={carbs}
        onChange={e => {
          if (e.target.value === '0' || e.target.value === '') {
            setCarbs('');
          } else {
            const value = Math.max(0, Math.min(1000, Number(e.target.value)));
            setCarbs(value);
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
        name={props.id}
        value={proteins}
        onChange={e => {
          if (e.target.value === '0' || e.target.value === '') {
            setProteins('');
          } else {
            const value = Math.max(0, Math.min(1000, Number(e.target.value)));
            setProteins(value);
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
        name={props.id}
        value={fats}
        onChange={e => {
          if (e.target.value === '0' || e.target.value === '') {
            setFats('');
          } else {
            const value = Math.max(0, Math.min(1000, Number(e.target.value)));
            setFats(value);
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
        name={props.id}
        value={calories}
        onChange={e => {
          if (e.target.value === '0' || e.target.value === '') {
            setCalories('');
          } else {
            const value = Math.max(0, Math.min(3000, Number(e.target.value)));
            setCalories(value);
            onChangeHandler(e, value);
          }
        }}
      />
      {!isMobile && (
        <div className={css.remove_meal_bottom} onClick={e => closeHandler(e)}>
          <img
            src={closeCircle}
            alt="close-circle"
            style={{ width: 25, height: 25 }}
            name={props.id}
          />
        </div>
      )}
    </div>
  );
};

export default InputModalElement;
