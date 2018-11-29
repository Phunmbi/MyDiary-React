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
