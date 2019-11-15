import React from 'react'

import Logo from '../Logo'
import Title from '../Title'
import Search from '../Search'
import SearchLink from '../SearchLink'
import Movie from '../Movie'


const DefaultHeaderContent = () => (
    <>
        <Logo value="netflixroulette" />
        <Title value="Find your movie" />
        <Search />
    </>
)

const MovieHeaderContent = props => (
    <>
        <SearchLink />
        <Movie {...props} />
    </>
)

export const Header = ({ movie }) => (
    <header>
        {movie ? <MovieHeaderContent {...movie} /> : <DefaultHeaderContent />}
    </header>
)

export default Header
