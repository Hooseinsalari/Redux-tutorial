import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import logger from "redux-logger";
import thank from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thank))
);

export default store;
