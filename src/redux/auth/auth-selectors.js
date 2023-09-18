const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getRegData = state => state.auth.regData;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getRegData,
  getUser,
  getToken,
};

export default authSelectors;
