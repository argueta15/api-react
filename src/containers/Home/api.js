// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class LibraryApi {
  static getAllBooks() {
    return apiFetch(API.LIBRARY.BOOKS);
  }
}

export default LibraryApi;