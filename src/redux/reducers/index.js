import { combineReducers } from "redux";

import counterReducers from "./counter";
// import addCartReducer from "./cart";
import addCartReducer from "./cart";
import searchProductReducer from "./searchProduct";

const reducers = combineReducers({
    counter: counterReducers,
    cart: addCartReducer,
    searchProduct: searchProductReducer,
});

export default reducers