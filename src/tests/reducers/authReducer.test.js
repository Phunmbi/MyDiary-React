import authReducer from '../../reducers/authReducer';
import * as types from '../../actions/actionTypes';

const payload = {
  data: {
    firstName: 'firstName',
    lastName: 'lastName',
  },
  authenticated: 'token',
  status: undefined,
};

const response = {
  firstName: 'firstName',
  lastName: 'lastName',
  authenticated: undefined,
  status: undefined,
};

describe('authReducer reducer', () => {
  it('should handle SIGNIN_USER', () => {
    expect(
      authReducer([], {
        type: types.USER_AUTH,
        payload,
      }),
    ).toEqual(response);
  });
  it('should handle SIGNOUT_USER', () => {
    expect(
      authReducer([], {
        type: types.USER_SIGNOUT,
      }),
    ).toEqual({
      authenticated: '',
      firstName: '',
      lastName: '',
      status: '',
    });
  });
  it('should handle SIGNIN_USER_ERROR', () => {
    expect(
      authReducer([], {
        type: types.USER_AUTH_ERROR,
        payload: 'an error occoured',
      }),
    ).toEqual({ error: 'an error occoured' });
  });
});
