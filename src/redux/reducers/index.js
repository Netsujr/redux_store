import { combineReducers } from 'redux';
import { storeReducer } from './productReducer';

const reducers = combineReducers({
  storeReducer: storeReducer,
});

export default reducers;
