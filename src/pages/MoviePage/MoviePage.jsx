import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, SearchLink, Movie, ResultsViewer } from 'components'
import { api } from 'services'

export class MoviePage extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            movie: {},
            movies: []
        }
    }

    componentDidMount() {
        const { match: { params: { id } }, history } = this.props
        api.getMovie(id)
            .then(movie => {
                this.setState({
                    movie
                })
                return movie.genres
            })
            .then(genres => api.getMovies({ searchBy: 'genres', filter: genres.join(',') }))
            .then(({ data }) => this.setState({ movies: data }))
            .catch(() => {
                history.push('/not-found')
            })
    }

    render() {
        return (
            <>
                <Header>
                    <Logo />
                    <SearchLink />
                    <Movie {...this.state.movie} />
                </Header>
                <Content>
                    <ResultsViewer items={this.state.movies} />
                </Content>
                <Footer>
                    <Logo value="netflixroulette" />
                </Footer>
            </>
        )
    }
}

export default MoviePage
