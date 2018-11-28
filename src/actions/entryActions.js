import axios from 'axios';
import * as types from './actionTypes';
import BASEURL from '../lib/config';

export const getAllEntries = (callback) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASEURL}/entries`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    console.log(response);
    // Then dispatch response
    dispatch({
      type: types.GET_ALL_ENTRIES,
      payload: response.data
    });

    await callback();
  } catch (error) {
    dispatch({
      type: types.GET_ALL_ENTRIES_ERROR,
      payload: error.response
    });
  }
};
