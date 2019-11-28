import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, Title, Search, ResultsViewer } from 'components'

export class HomePage extends React.PureComponent {
    componentDidMount() {
        const { loadMany, resetFetchParams } = this.props
        resetFetchParams()
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
