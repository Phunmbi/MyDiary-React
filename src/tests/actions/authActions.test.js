import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/authActions';
import initialState from '../../reducers/initialState/index';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data: {
    firstName: 'name',
    lastName: 'last',
  },
  token: 'tokenized',
  id: 4,
};

const formValues = {
  firstName: 'name',
  lastName: 'last',
  email: 'email@gmail.com',
  password: 'passwordpassword',
};
const error = { error: 'Internal Server Error' };

describe('Auth actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('USER_AUTH Sign up success', () => {
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
        type: types.USER_AUTH,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.signup(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('USER_AUTH Sign up failure', () => {
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
        type: types.USER_AUTH_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.signup(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('USER_AUTH Sign in success', () => {
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
        type: types.USER_AUTH,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.signin({
      email: formValues.email,
      password: formValues.password,
    })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('USER_AUTH Sign in failure', () => {
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
        type: types.USER_AUTH_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.signin({
      email: formValues.email,
      password: formValues.password,
    })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('USER_AUTH Sign in failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });

    const expectedActions = [
      {
        type: types.USER_SIGNOUT,
      },
    ];

    const store = mockStore({ initialState });

    store.dispatch(actions.signout());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
