// ACTION TYPES
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_MYCONTACTS = 'SET_MYCONTACTS'; 

export const actionsTypes = {
  SET_USER_PROFILE,
  SET_LOGIN,
  SET_LOGOUT,
  SET_MYCONTACTS,
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

const setMyContacts = (mycontacts) => ({
  type: SET_MYCONTACTS,
  payload: mycontacts,
});

export const actionsCreators = {
  setUserProfile,
  setLogin,
  setLogout,
  setMyContacts,
}