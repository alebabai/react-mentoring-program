import React from 'react'

import { ErrorPage } from 'pages'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, message: error.message }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error happened', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage message="Something went wrong" description={this.state.message} />
        }

        return this.props.children
    }
}

export default ErrorBoundary
