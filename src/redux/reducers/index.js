import { combineReducers } from "redux";

import counterReducers from "./counter";
// import addCartReducer from "./cart";
import cartReducers from "./cart";

const reducers = combineReducers({
    counter: counterReducers,
    cart: cartReducers,
});

export default reducers