import { actionsTypes } from '../actions';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionsTypes.SET_LOGIN:
    return {
      ...state,
      isAuthenticated: action.payload,
    };
  // eslint-disable-next-line sonarjs/no-duplicated-branches
  case actionsTypes.SET_LOGOUT:
    return {
      ...state,
      isAuthenticated: action.payload,
    };
  default:
    return state;
  }
};

export default auth;
