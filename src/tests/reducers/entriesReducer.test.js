import entriesReducer from '../../reducers/entriesReducer';
import * as types from '../../actions/actionTypes';

const payload = true;

describe('entriesReducer reducer', () => {
  it('should handle GET_ALL_ENTRIES', () => {
    expect(
      entriesReducer([], {
        type: types.GET_ALL_ENTRIES,
        payload,
      }),
    ).toEqual({ entries: true });
  });
  it('should handle GET_ALL_ENTRIES_ERROR', () => {
    expect(
      entriesReducer([], {
        type: types.GET_ALL_ENTRIES_ERROR,
        payload,
      }),
    ).toEqual({ entriesError: true });
  });
  it('should handle ADD_ENTRY', () => {
    expect(
      entriesReducer([], {
        type: types.ADD_ENTRY,
        payload,
      }),
    ).toEqual({ newEntry: true });
  });
  it('should handle ADD_ENTRY_ERROR', () => {
    expect(
      entriesReducer([], {
        type: types.ADD_ENTRY_ERROR,
        payload,
      }),
    ).toEqual({ newEntryError: true });
  });
  it('should handle EDIT_ENTRY', () => {
    expect(
      entriesReducer([], {
        type: types.EDIT_ENTRY,
        payload,
      }),
    ).toEqual({ editedEntry: true });
  });
  it('should handle EDIT_ENTRY_ERROR', () => {
    expect(
      entriesReducer([], {
        type: types.EDIT_ENTRY_ERROR,
        payload,
      }),
    ).toEqual({ editedEntryError: true });
  });
  it('should handle VIEW_ENTRY', () => {
    expect(
      entriesReducer([], {
        type: types.VIEW_ENTRY,
        payload,
      }),
    ).toEqual({ singleEntry: true });
  });
  it('should handle VIEW_ENTRY_ERROR', () => {
    expect(
      entriesReducer([], {
        type: types.VIEW_ENTRY_ERROR,
        payload,
      }),
    ).toEqual({ singleEntryError: true });
  });
  it('should handle DELETE_ENTRY', () => {
    expect(
      entriesReducer([], {
        type: types.DELETE_ENTRY,
        payload,
      }),
    ).toEqual({ deletedEntry: true });
  });
  it('should handle DELETE_ENTRY_ERROR', () => {
    expect(
      entriesReducer([], {
        type: types.DELETE_ENTRY_ERROR,
        payload,
      }),
    ).toEqual({ deletedEntryError: true });
  });
});
