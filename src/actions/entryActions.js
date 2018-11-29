import axios from 'axios';
import * as types from './actionTypes';
import BASEURL from '../lib/config';

export const getAllEntries = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASEURL}/entries`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.GET_ALL_ENTRIES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ALL_ENTRIES_ERROR,
      payload: error.response,
    });
  }
};

export const addEntry = (formvalues) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${BASEURL}/entries`,
      data: formvalues,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.ADD_ENTRY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_ENTRY_ERROR,
      payload: error.response,
    });
  }
};

export const viewEntry = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASEURL}/entries/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.VIEW_ENTRY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.VIEW_ENTRY_ERROR,
      payload: error.response,
    });
  }
};

export const editEntry = (body, id) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${BASEURL}/entries/${id}`,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.EDIT_ENTRY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.EDIT_ENTRY_ERROR,
      payload: error.response,
    });
  }
};

export const deleteEntry = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${BASEURL}/entries/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    dispatch({
      type: types.DELETE_ENTRY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_ENTRY_ERROR,
      payload: error.response,
    });
  }
};
