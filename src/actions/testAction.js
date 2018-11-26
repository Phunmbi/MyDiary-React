
import * as types from './actionTypes';

export const testAction = () => (dispatch) => {
  const response = {
    firstName: 'Adeniyi',
    middleName: 'Oluwafunmbi',
    lastName: 'Adeyokunnu'
  }
  dispatch({
      type: types.GET_TEST,
      payload: response,
    });
};
