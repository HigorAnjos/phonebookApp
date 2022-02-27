// ACTION TYPES
const SET_USER_PROFILE = 'SET_USER_PROFILE';

// ACTION CREATORS
const setUserProfile = (userInfo) => ({
  type: SET_USER_PROFILE,
  payload: userInfo,
});

export const actionsTypes = {
  SET_USER_PROFILE,
}

export const actionsCreators = {
  setUserProfile,
}