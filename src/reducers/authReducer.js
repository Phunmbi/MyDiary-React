import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state= initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return { ...state, authenticated: action.payload.token, firstName: action.payload.data.firstName, lastName: action.payload.data.lastName, status: action.payload.status };
    case types.SIGNUP_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
