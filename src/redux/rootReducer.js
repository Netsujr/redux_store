import { combineReducers } from "redux";

import storeReducer from "./Store/Store-reducer";

const rootReducer = combineReducers({
  store: storeReducer,
});

export default rootReducer;
