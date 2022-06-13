import { combineReducers } from "redux";

import counterReducers from "./counter";
// import addCartReducer from "./cart";
import addCartReducer from "./cart";
import searchProductReducer from "./searchProduct";
import doAuthReducer from "./auth";

const reducers = combineReducers({
    counter: counterReducers,
    cart: addCartReducer,
    searchProduct: searchProductReducer,
    auth: doAuthReducer,
});

export default reducers