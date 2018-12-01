import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/profileActions';
import initialState from '../../reducers/initialState/index';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data: {
    time: '04:44',
  },
};

const formValues = {
  time: '04:44',
};
const error = { error: 'Internal Server Error' };

describe('Reminder actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('GET REMINDER success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        payload: response,
        type: types.GET_REMINDER,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.getReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('GET REMINDER failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({ status: 500, response: error });
    });

    const expectedActions = [{ payload: { data: undefined, error: 'Internal Server Error' }, type: types.GET_REMINDER_ERROR }];

    const store = mockStore({ initialState });

    return store.dispatch(actions.getReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('ADD REMINDER success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        payload: response,
        type: types.ADD_REMINDER,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.addReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('ADD REMINDER failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: error,
      });
    });

    const expectedActions = [
      {
        payload: { data: undefined, error: 'Internal Server Error' },
        type: types.ADD_REMINDER_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.addReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('DELETE REMINDER success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        payload: response,
        type: types.DELETE_REMINDER,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.deleteReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('DELETE REMINDER failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: error,
      });
    });

    const expectedActions = [
      {
        payload: { data: undefined, error: 'Internal Server Error' },
        type: types.DELETE_REMINDER_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.deleteReminder(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
