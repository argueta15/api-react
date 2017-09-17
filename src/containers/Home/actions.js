// API
import libraryApi from './api';

// Actions
const LIBRARY_LIST_BOOKS = 'LIBRARY_LIST_BOOKS';

export function loadBooks() {
  return {
    type: LIBRARY_LIST_BOOKS,
    payload: libraryApi.getAllBooks()
  };
}