import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Layout from './components/Layout/Layout';
import Wellcome from 'components/Wellcome/Wellcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from 'components/ForgotPassword/ForgotPassword';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import Diary from './components/Diary/Diary';
import RecommendedFood from './components/RecommendedFood/RecommendedFood';
import Settings from './components/Settings/Settings';
import UserGoal from 'components/UserData/UserGoal';
import UserGender from 'components/UserData/UserGender';
import UserBody from 'components/UserData/UserBody';
import UserActivity from 'components/UserData/UserActivity';
import { Navigate } from 'react-router-dom';
import TestDoughnut from 'components/TestComponent/TestDoughnut';
import LoaderModal from 'components/LoaderModal/LoaderModal';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
// import { setLoadingTrue } from 'redux/auth/auth-slice';
import mealsOperations from 'redux/meals/meals-operations';
import TestIrina from 'components/TestComponent/TestIrina';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(authSelectors.getIsLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        // dispatch(setLoadingTrue());
        console.log('Fetching current user...');
        dispatch(authOperations.fetchCurrentUser()).then(() => {
          dispatch(mealsOperations.fetchDay());
        });
      }
    })();
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isLoading && <LoaderModal />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            exact
            index
            restricted
            element={
              <PublicRoute>
                <Wellcome />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="signup"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="usergoal"
            element={
              <PublicRoute>
                <UserGoal />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="usergender"
            element={
              <PublicRoute>
                <UserGender />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="userbody"
            element={
              <PublicRoute>
                <UserBody />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="useractivity"
            element={
              <PublicRoute>
                <UserActivity />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="signin"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="main"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="diary"
            element={
              <PrivateRoute>
                <Diary />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="recommended"
            element={
              <PrivateRoute>
                <RecommendedFood />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Route>
        <Route exact path="/*" element={<Navigate to="/" />} />
        <Route exact path="/test" element={<TestDoughnut />} />
        <Route exact path="/testIrina" element={<TestIrina />} />
      </Routes>
    </>
  );
}

export default App;
