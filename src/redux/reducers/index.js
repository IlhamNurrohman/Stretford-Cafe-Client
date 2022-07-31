import { combineReducers } from "redux";

import counterReducers from "./counter";
import addCartReducer from "./cart";
import doAuthReducer from "./auth";
import doDataReducer from "./userData";

const reducers = combineReducers({
    counter: counterReducers,
    cart: addCartReducer,
    auth: doAuthReducer,
    userData: doDataReducer,
});

export default reducers