import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state= initialState, action) => {
  switch (action.type) {
    case types.GET_TEST:
      return { ...state, test: action.response };
    default:
      return state;
  }
};
