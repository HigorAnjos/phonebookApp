// ACTION TYPES
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';

export const actionsTypes = {
  SET_USER_PROFILE,
}
// ACTION CREATORS
const setUserProfile = (userInfo) => ({
  type: SET_USER_PROFILE,
  payload: userInfo,
});

const setLogin = () => ({
  type: SET_LOGIN,
  payload: true,
});

const setLogout = () => ({
  type: SET_LOGOUT,
  payload: false,
});

export const actionsCreators = {
  setUserProfile,
  setLogin,
  setLogout,
}