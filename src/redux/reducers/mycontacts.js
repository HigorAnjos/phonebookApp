import { actionsTypes } from '../actions';

const INITIAL_STATE = [];

const contacts = (store = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionsTypes.SET_CONTACT:
    return [...store, action.payload];
  case actionsTypes.REMOVE_CONTACT:
    return store.filter(({ id }) => id !== action.payload);
  case actionsTypes.SET_CONTACT_LIST:
    return action.payload;
  default:
    return store;
  }
};

export default contacts;
