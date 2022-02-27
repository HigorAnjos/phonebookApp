import { actionsTypes } from '../actions'

const INITIAL_STATE = {
  mycontacts: [],
}

const contacts = (store = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsTypes.SET_MYCONTACTS:
      return {
        ...store,
        mycontacts: action.payload
      }
    default:
      return store;
  }
}

export default contacts;
