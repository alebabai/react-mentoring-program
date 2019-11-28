import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, Title, Search, ResultsViewer } from 'components'

export class HomePage extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const { loadMany } = this.props
        loadMany()
    }

    render() {
        const { items, updateSearchParams, updateFetchParams, sortBy, searchBy, searchQuery } = this.props
        return (
            <>
                <Header>
                    <Logo value="netflixroulette" />
                    <Title value="Find your movie" />
                    <Search onParamsUpdate={updateSearchParams} searchBy={searchBy} query={searchQuery} />
                </Header>
                <Content>
                    <ResultsViewer showSummary={false} items={items} onParamsUpdate={updateFetchParams} sortBy={sortBy} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }

}

export default HomePage
