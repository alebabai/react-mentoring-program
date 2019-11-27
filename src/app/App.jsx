import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ErrorBoundary } from 'components'
import { HomePage, MoviePage, ErrorPage } from 'pages'
import store from 'store'

import { root } from './style.css'


export const App = () => (
    <div className={root}>
        <Provider store={store}>
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
        </Provider>
    </div>
)

export default App
