import { combineReducers } from "redux";

import counterReducers from "./counter";
import cartReducers from "./counter";

const reducers = combineReducers({
    counter: counterReducers,
    cart: cartReducers,
});

export default reducers