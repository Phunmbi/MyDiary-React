import { combineReducers } from 'redux';
import authReducer from './authReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  auth: authReducer,
  entries: entriesReducer
});
