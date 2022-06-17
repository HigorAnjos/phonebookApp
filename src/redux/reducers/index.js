import { combineReducers } from 'redux';
import userProfile from './userprofile';
import auth from './auth';
import mycontacts from './mycontacts';

const rootReducer = combineReducers({
  userProfile,
  auth,
  mycontacts,
});

export default rootReducer;
