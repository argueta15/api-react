// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  books: []
};

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIBRARY_LIST_BOOKS_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        books: response
      });
    }

    default:
      return state;
  }
}