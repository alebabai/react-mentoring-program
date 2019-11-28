import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import { api } from 'services'

const loggerMiddleware = createLogger()

export const store = createStore(
    combineReducers({
        ...reducers,
    }),
    applyMiddleware(
        loggerMiddleware,
        thunk.withExtraArgument({ api })
    )
)

export default store
