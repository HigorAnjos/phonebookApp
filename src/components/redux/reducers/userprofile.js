import { actionsTypes } from "../actions";

const INITIAL_STATE = {
  name: '',
  email: '',
};

const userProfile = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.SET_USER_PROFILE:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state;
  }
}

export default userProfile;