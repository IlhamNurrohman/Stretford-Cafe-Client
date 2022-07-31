import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import { createLogger } from "redux-logger"
import rpm from "redux-promise-middleware"
import storage from "redux-persist/lib/storage";
import reducers from './reducers'
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth", "userData"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

const logger = createLogger();
const middlewares = applyMiddleware(rpm, thunk, logger)

export let store = createStore(persistedReducer, middlewares)
export let persistor = persistStore(store)
