import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { ErrorBoundary } from 'components'
import { HomePage, MoviePage, ErrorPage } from 'pages'

import { root } from './style.css'


export const App = () => (
    <div className={root}>
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
    </div>
)

export default App
