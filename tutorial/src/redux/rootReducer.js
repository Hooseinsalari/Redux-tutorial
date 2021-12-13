import { combineReducers } from "redux";

import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";
import usersReducer from "./users/UsersReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer,
    usersState: usersReducer
})

export default rootReducer;