import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { createLogger } from "redux-logger"
import rpm from "redux-promise-middleware"
import reducers from './reducers'

const logger = createLogger()
const middlewares = applyMiddleware(rpm, logger)

export const store = createStore(reducers, middlewares)