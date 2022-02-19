import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";
import usersReducer from "./users/usersReducer";

const rootRaducer = combineReducers({
    counter: counterReducer,
    number: numberReducer,
    usersState: usersReducer
})

export default rootRaducer;