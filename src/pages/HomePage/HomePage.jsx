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
        const { items, sortBy, updateFetchParams, searchQuery, searchBy, updateSearchParams, loadMany } = this.props
        const performSearch = () => {
            updateSearchParams({ active: true })
            loadMany()
        }
        const updateParamsAndReload = params => {
            updateFetchParams(params)
            loadMany()
        }
        return (
            <>
                <Header>
                    <Logo value="netflixroulette" />
                    <Title value="Find your movie" />
                    <Search query={searchQuery} searchBy={searchBy} onParamsUpdate={updateSearchParams} onSearch={performSearch} />
                </Header>
                <Content>
                    <ResultsViewer showSummary={false} items={items} sortBy={sortBy} onParamsUpdate={updateParamsAndReload} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }

}

export default HomePage
