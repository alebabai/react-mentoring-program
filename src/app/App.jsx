import React from 'react'

import { Header, Content, Footer } from '../components/layout'
import { ErrorBoundary } from '../components'

export const App = () => (
    <div className='app'>
        <ErrorBoundary>
            <Header />
            <Content />
            <Footer />
        </ErrorBoundary>
    </div>
)

export default App
