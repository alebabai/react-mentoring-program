import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import * as reducers from './reducers'

const loggerMiddleware = createLogger()

export const store = createStore(
    combineReducers({
        ...reducers,
    }),
    applyMiddleware(
        loggerMiddleware
    )
)

export default store
