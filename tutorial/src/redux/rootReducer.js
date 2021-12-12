import { combineReducers } from "redux";

import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer
})

export default rootReducer;