import { combineReducers } from "redux";

import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";
import usersReducer from "./users/UsersReducer";
import cakeReducer from "./cake/CakeReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer,
    usersState: usersReducer,
    cakeState: cakeReducer
})

export default rootReducer;