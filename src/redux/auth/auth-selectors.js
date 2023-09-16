const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getTemporaryCredentials = state => state.auth.temporaryCredentials;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getTemporaryCredentials,
};

export default authSelectors;
