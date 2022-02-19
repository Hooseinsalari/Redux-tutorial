import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import thunk from "redux-thunk"

// reducers
import rootRaducer from "./rootReducer";

const store = createStore(rootRaducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
))

export default store;