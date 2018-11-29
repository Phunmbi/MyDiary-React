import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_AUTH:
      return {
        ...state,
        authenticated: action.payload.token || action.payload.tokenize,
        firstName: action.payload.data.firstName,
        lastName: action.payload.data.lastName,
        status: action.payload.status,
      };
    case types.USER_AUTH_ERROR:
      return { ...state, error: action.payload };
    case types.USER_SIGNOUT:
      return {
        ...state,
        authenticated: '',
        firstName: '',
        lastName: '',
        status: '',
      };
    default:
      return state;
  }
};
