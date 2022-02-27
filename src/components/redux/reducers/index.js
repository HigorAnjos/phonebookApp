import { combineReducers } from 'redux';
import userProfile from './userprofile';

const rootReducer = combineReducers({
  userProfile,
});

export default rootReducer;