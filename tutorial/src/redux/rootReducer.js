import { combineReducers } from "redux";

import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";
import usersReducer from "./users/UsersReducer";
import cakeReducer from "./cake/CakeReducer";
import nameReducer from "./name/NameReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer,
    usersState: usersReducer,
    cakeState: cakeReducer,
    nameState: nameReducer
})

export default rootReducer;