const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getRegData = state => state.auth.regData;
const getRegDetails = state => state.auth.regDetails;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getRegData,
  getRegDetails,
};

export default authSelectors;
