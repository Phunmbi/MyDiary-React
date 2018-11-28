import axios from 'axios';
import * as types from './actionTypes';
import BASEURL from '../lib/config';

const persistAuth = (token, data) => {
  localStorage.setItem('token', token);
  localStorage.setItem('firstName', data.firstName);
  localStorage.setItem('lastName', data.lastName);
}

export const signup = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASEURL}/auth/signup`, formValues);

    // Store important details in local storage
    const { token, data } = response.data;
    persistAuth(token, data);

    // Then dispatch response
    dispatch({
      type: types.SIGNUP,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: types.SIGNUP_ERROR,
      payload: error.response
    });
  }
};

export const signin = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASEURL}/auth/login`, formValues);
    // Store important details in local storage
    const { tokenize, data } = response.data;
    persistAuth(tokenize, data);

    // Then dispatch response
    dispatch({
      type: types.SIGNUP,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: types.SIGNUP_ERROR,
      payload: error.response
    });
  }
};
