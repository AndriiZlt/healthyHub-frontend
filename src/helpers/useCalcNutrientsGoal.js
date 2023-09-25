import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import useCalcBMR from './useCalcBmr';

const useCalcNutrientsGoal = () => {
  const { goal } = useSelector(authSelectors.getUser); // Початкова ціль (схуднути)
  const calories = useCalcBMR(); // Загальна кількість калорій
  let proteinPercentage, fatPercentage, carbPercentage;
  switch (goal) {
    case 'Lose fat':
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
      break;
    case 'Gain musle':
      proteinPercentage = 0.3;
      fatPercentage = 0.2;
      break;
    case 'Maintain':
      proteinPercentage = 0.2;
      fatPercentage = 0.25;
      break;
    default:
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
  }

  carbPercentage = 1 - (proteinPercentage + fatPercentage);

  const proteinGoal = Math.round((proteinPercentage * calories) / 4);
  const fatGoal = Math.round((fatPercentage * calories) / 9);
  const carbsGoal = Math.round((carbPercentage * calories) / 4);

  return { proteinGoal, fatGoal, carbsGoal };
};
export default useCalcNutrientsGoal;
