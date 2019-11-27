import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, Title, Search, ResultsViewer } from 'components'
import { api } from 'services'

export class HomePage extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        api.getMovies({}).then(({ data }) => this.setState({
            movies: data
        }))
    }

    render() {
        return (
            <>
                <Header>
                    <Logo value="netflixroulette" />
                    <Title value="Find your movie" />
                    <Search />
                </Header>
                <Content>
                    <ResultsViewer showSummary={false} items={this.state.movies} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }

}

export default HomePage
