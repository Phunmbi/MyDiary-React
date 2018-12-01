import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/actionTypes';

const payload = true;

describe('profileReducer reducer', () => {
  it('should handle GET_REMINDER', () => {
    expect(
      profileReducer([], {
        type: types.GET_REMINDER,
        payload,
      }),
    ).toEqual({ existingReminder: true });
  });
  it('should handle GET_REMINDER_ERROR', () => {
    expect(
      profileReducer([], {
        type: types.GET_REMINDER_ERROR,
        payload,
      }),
    ).toEqual({ existingReminderError: true });
  });
  it('should handle ADD_REMINDER', () => {
    expect(
      profileReducer([], {
        type: types.ADD_REMINDER,
        payload,
      }),
    ).toEqual({ newReminder: true });
  });
  it('should handle ADD_REMINDER_ERROR', () => {
    expect(
      profileReducer([], {
        type: types.ADD_REMINDER_ERROR,
        payload,
      }),
    ).toEqual({ newReminderError: true });
  });
  it('should handle DELETE_REMINDER', () => {
    expect(
      profileReducer([], {
        type: types.DELETE_REMINDER,
        payload,
      }),
    ).toEqual({ deletedReminder: true });
  });
  it('should handle DELETE_REMINDER_ERROR', () => {
    expect(
      profileReducer([], {
        type: types.DELETE_REMINDER_ERROR,
        payload,
      }),
    ).toEqual({ deletedReminderError: true });
  });
});
