import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REMINDER:
      return { ...state, existingReminder: action.payload };
    case types.GET_REMINDER_ERROR:
      return { ...state, existingReminderError: action.payload };
    case types.ADD_REMINDER:
      return { ...state, newReminder: action.payload };
    case types.ADD_REMINDER_ERROR:
      return { ...state, newReminderError: action.payload };
    case types.DELETE_REMINDER:
      return { ...state, deletedReminder: action.payload };
    case types.DELETE_REMINDER_ERROR:
      return { ...state, deletedReminderError: action.payload };
    default:
      return state;
  }
};
