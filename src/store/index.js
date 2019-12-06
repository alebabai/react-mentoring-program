import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import { Api } from 'services'

const loggerMiddleware = createLogger()
const api = new Api({
    baseUrl: process.env.API_BASE_URL
})

export const configureStore = () => createStore(
    combineReducers({
        ...reducers,
    }),
    applyMiddleware(
        loggerMiddleware,
        thunk.withExtraArgument({ api })
    )
)

export default configureStore
