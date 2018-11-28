import axios from 'axios';
import * as types from './actionTypes';
import BASEURL from '../lib/config';

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASEURL}/auth/signup`, formValues);
    dispatch({
      type: types.SIGNUP,
      payload: response.data
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNUP_ERROR,
      payload: error
    });
  }
};
