import { combineReducers } from 'redux';
import authReducer from './authReducer';
import entriesReducer from './entriesReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  entries: entriesReducer,
  profile: profileReducer,
});
