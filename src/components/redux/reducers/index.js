import { combineReducers } from 'redux';
import userProfile from './userprofile';
import auth from './auth';

const rootReducer = combineReducers({
  userProfile,
  auth,
});

export default rootReducer;