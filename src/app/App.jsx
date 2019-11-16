import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { ErrorBoundary } from '../components'
import { HomePage, MoviePage, ErrorPage } from '../pages'

export const App = () => (
    <div className='app'>
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/movie'>
                        <MoviePage />
                    </Route>
                    <Route>
                        <ErrorPage message="Page not found"/>
                    </Route>
                </Switch>
            </Router>
        </ErrorBoundary>
    </div>
)

export default App
