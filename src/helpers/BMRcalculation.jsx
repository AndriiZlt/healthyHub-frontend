import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

function CalcBMR() {
  const { gender, weight, height, age, activity } = useSelector(
    authSelectors.getUser
  );
  const BMR =
    gender === 'Male'
      ? (88.362 +
          13.397 * Number(weight) +
          4.799 * Number(height) -
          5.677 * Number(age)) *
        Number(activity)
      : (447.593 +
          9.247 * Number(weight) +
          3.098 * Number(height) -
          4.33 * Number(age)) *
        Number(activity);

  return <>{Math.floor(BMR)}</>;
}

export default CalcBMR;

// Формула для визначення денного рівня калорійного споживання, необхідного для підтримання поточної маси тіла.
// Для чоловіків:
// BMR =( 88.362 + (13.397 x вага в кілограмах) + (4.799 x зріст в сантиметрах) - (5.677 x вік в роках) )* Коєфіцієнт фізичної активності

// Для жінок:
// BMR = ( 447.593 + (9.247 x вага в кілограмах) + (3.098 x зріст в сантиметрах) - (4.330 x вік в роках) )* Коєфіцієнт фізичної активності

// BMR - базовий обмінний обсяг калорій (в кілокалоріях) - це кількість енергії, яка витрачається організмом за добу на підтримання життєво важливих функцій у стані спокою
