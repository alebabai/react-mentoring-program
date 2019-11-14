import React from 'react'

import Logo from '../Logo'
import Title from '../Title'
import Search from '../Search'

export const Header = () => (
    <header>
        <Logo value="netflixroulette"/>
        <Title value="Find your movie" />
        <Search />
    </header>
)

export default Header
