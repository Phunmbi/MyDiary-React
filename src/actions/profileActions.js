import axios from 'axios';
import * as types from './actionTypes';
import BASEURL from '../lib/config';

export const getReminder = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASEURL}/auth/reminder`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.GET_REMINDER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_REMINDER_ERROR,
      payload: error.response,
    });
  }
};

export const addReminder = (body) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${BASEURL}/auth/reminder`,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.ADD_REMINDER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_REMINDER_ERROR,
      payload: error.response,
    });
  }
};

export const deleteReminder = () => async (dispatch) => {
  try {
    const response = await axios.delete(`${BASEURL}/auth/reminder`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.DELETE_REMINDER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_REMINDER_ERROR,
      payload: error.response,
    });
  }
};
