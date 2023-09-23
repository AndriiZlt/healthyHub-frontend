// import React from 'react';
import { useDispatch } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';

const TestIrina = () => {
  const dispatch = useDispatch();
  setTimeout(() => dispatch(mealsOperations.fetchYear()), 3000);

  return <div>skjdsak</div>;
};

export default TestIrina;
