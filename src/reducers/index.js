// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import library from '../containers/Home/reducer';

const rootReducer = combineReducers({
  library
});

export default rootReducer;