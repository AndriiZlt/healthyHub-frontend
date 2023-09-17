const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserData = state => state.auth.userData;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getUserData,
};

export default authSelectors;

useSelector(authSelectors.getUserData);
