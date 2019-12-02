import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ErrorBoundary, Spinner } from 'components'
import { HomePage, MoviePage, ErrorPage } from 'pages'
import { store, persistor } from 'store'

import { root } from './style.css'


export const App = () => (
    <div className={root}>
        <Provider store={store}>
            <PersistGate loading={Spinner()} persistor={persistor}>
                <ErrorBoundary>
                    <Router>
                        <Switch>
                            <Route exact path={['/', '/movies']} component={HomePage} />
                            <Route path='/movies/:id' component={MoviePage} />
                            <Route>
                                <ErrorPage message="Page not found" />
                            </Route>
                        </Switch>
                    </Router>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    </div>
)

export default App
