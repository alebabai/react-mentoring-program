import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, SearchLink, Movie, ResultsViewer } from 'components'

export class MoviePage extends React.PureComponent {
    componentDidMount() {
        const { match: { params: { id } }, loadOne, resetSearchParams } = this.props
        resetSearchParams()
        loadOne(id)
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
                    <Logo />
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
