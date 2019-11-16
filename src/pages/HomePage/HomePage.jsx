import React from 'react'

import { Header, Content, Footer } from '../../components/layout'
import { Logo, Title, Search, ResultsViewer } from '../../components'

const mockedData = [{
    id: '1',
    imageUrl: null,
    title: 'Fight Club',
    genre: 'Action',
    releaseDate: '1995'
}]

export const HomePage = () => (
    <>
        <Header>
            <Logo value="netflixroulette" />
            <Title value="Find your movie" />
            <Search />
        </Header>
        <Content>
            <ResultsViewer items={mockedData}/>
        </Content>
        <Footer>
            <Logo value="netflixroulette" />
        </Footer>
    </>
)

export default HomePage
