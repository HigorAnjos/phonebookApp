// ACTION TYPES
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_CONTACT = 'SET_CONTACT';
const SET_CONTACT_LIST = 'SET_CONTACT_LIST';
const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const actionsTypes = {
  SET_USER_PROFILE,
  SET_LOGIN,
  SET_LOGOUT,
  SET_CONTACT,
  REMOVE_CONTACT,
  SET_CONTACT_LIST,
};
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

const setContactList = (contacts) => ({
  type: SET_CONTACT_LIST,
  payload: contacts,
});

const setContact = (mycontact) => ({
  type: SET_CONTACT,
  payload: mycontact,
});

const removeContact = (mycontactID) => ({
  type: REMOVE_CONTACT,
  payload: mycontactID,
});

export const actionsCreators = {
  setUserProfile,
  setLogin,
  setLogout,
  setContactList,
  setContact,
  removeContact,
};
