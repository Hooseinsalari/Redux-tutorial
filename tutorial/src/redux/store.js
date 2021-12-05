import {createStore} from "redux";
import reducer from "./counter/CounterReducer";

const store = createStore(reducer);

export default store;