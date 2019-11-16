import React from 'react'

import { Header, Content, Footer } from '../../components/layout'
import { Logo, SearchLink, Movie, ResultsViewer } from '../../components'

export const MoviePage = () => (
    <>
        <Header>
            <Logo />
            <SearchLink />
            <Movie />
        </Header>
        <Content>
            <ResultsViewer items={[]} />
        </Content>
        <Footer>
            <Logo value="netflixroulette" />
        </Footer>
    </>
)

export default MoviePage
