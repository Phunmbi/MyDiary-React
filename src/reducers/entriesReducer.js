import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ENTRIES:
      return { ...state, entries: action.payload };
    case types.GET_ALL_ENTRIES_ERROR:
      return { ...state, entriesError: action.payload };
    case types.ADD_ENTRY:
      return { ...state, newEntry: action.payload };
    case types.ADD_ENTRY_ERROR:
      return { ...state, newEntryError: action.payload };
    default:
      return state;
  }
};
