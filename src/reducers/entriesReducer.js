import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ENTRIES:
      return {
        ...state,
        entries: action.payload
      };
    case types.GET_ALL_ENTRIES_ERROR:
      return { ...state, entriesError: action.payload };
    default:
      return state;
  }
};
