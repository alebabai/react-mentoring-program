import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, SearchLink, Movie, ResultsViewer } from 'components'

export class MoviePage extends React.PureComponent {
    loadInitialData() {
        const { match: { params: { id } }, loadOne, resetSearchParams } = this.props
        resetSearchParams()
        loadOne(id)
    }

    componentDidMount() {
        this.loadInitialData()
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props
        if (prevProps.match.params.id !== id) {
            this.loadInitialData()
        }
    }

    render() {
        const { item, items, sortBy, loadOne, updateFetchParams } = this.props
        const updateParamsAndReload = params => {
            updateFetchParams(params)
            loadOne(item.id)
        }
        return (
            <>
                <Header>
                    <Logo value="netflixroulette"/>
                    <SearchLink />
                    <Movie {...item} />
                </Header>
                <Content>
                    <ResultsViewer showSummary={true} summaryText={`Films by following genres: ${item.genres.join(', ')}`} items={items} sortBy={sortBy} onParamsUpdate={updateParamsAndReload} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }
}

export default MoviePage
