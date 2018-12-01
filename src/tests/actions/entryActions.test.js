import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/entryActions';
import initialState from '../../reducers/initialState/index';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data: {
    title: 'name',
    details: 'last',
    time_created: 'timecreated',
  },
  id: 4,
};

const formValues = {
  title: 'name',
  details: 'last',
};
const error = { error: 'Internal Server Error' };

describe('Entry actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('GET ALL ENTRIES success', () => {
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
        type: types.GET_ALL_ENTRIES,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.getAllEntries(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('GET ALL ENTRIES failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({ status: 500, response: error });
    });

    const expectedActions = [{ payload: { data: undefined, error: 'Internal Server Error' }, type: types.GET_ALL_ENTRIES_ERROR }];

    const store = mockStore({ initialState });

    return store.dispatch(actions.getAllEntries(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('ADD ENTRY success', () => {
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
        type: types.ADD_ENTRY,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.addEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('ADD ENTRY failure', () => {
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
        type: types.ADD_ENTRY_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.addEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('VIEW ENTRY success', () => {
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
        type: types.VIEW_ENTRY,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.viewEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('ADD ENTRY failure', () => {
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
        type: types.VIEW_ENTRY_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.viewEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('EDIT ENTRY success', () => {
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
        type: types.EDIT_ENTRY,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.editEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('EDIT ENTRY failure', () => {
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
        type: types.EDIT_ENTRY_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.editEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('DELETE ENTRY success', () => {
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
        type: types.DELETE_ENTRY,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.deleteEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('DELETE ENTRY failure', () => {
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
        type: types.DELETE_ENTRY_ERROR,
      },
    ];

    const store = mockStore({ initialState });

    return store.dispatch(actions.deleteEntry(formValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
