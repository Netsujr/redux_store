import { combineReducers } from "redux";

import storeReducer from "./Store/storeReducer";

const rootReducer = combineReducers({
  store: storeReducer,
});

export default rootReducer;
