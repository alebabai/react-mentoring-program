import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as reducers from './reducers'
import { api } from 'services'

const loggerMiddleware = createLogger()

const persistConfig = {
    key: 'root',
    storage,
}

export const store = createStore(
    persistReducer(
        persistConfig,
        combineReducers({
            ...reducers,
        }),
    ),
    {},
    compose(
        applyMiddleware(
            loggerMiddleware,
            thunk.withExtraArgument({ api }),
        ),
    )
)

export const persistor = persistStore(store)
