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
    case types.VIEW_ENTRY:
      return { ...state, singleEntry: action.payload };
    case types.VIEW_ENTRY_ERROR:
      return { ...state, singleEntryError: action.payload };
    case types.EDIT_ENTRY:
      return { ...state, editedEntry: action.payload };
    case types.EDIT_ENTRY_ERROR:
      return { ...state, editedEntryError: action.payload };
    default:
      return state;
  }
};
