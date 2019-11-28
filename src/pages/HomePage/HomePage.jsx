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
        const { items, sortBy, updateFetchParams, searchQuery, searchBy, updateSearchParams, } = this.props
        return (
            <>
                <Header>
                    <Logo value="netflixroulette" />
                    <Title value="Find your movie" />
                    <Search query={searchQuery} searchBy={searchBy} onParamsUpdate={updateSearchParams} />
                </Header>
                <Content>
                    <ResultsViewer showSummary={false} items={items} sortBy={sortBy} onParamsUpdate={updateFetchParams} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }

}

export default HomePage
