import React from 'react'

import { Header, Content, Footer } from 'components/layout'
import { Logo, Title, Search, ErrorBox } from 'components'

export const ErrorPage = ({ message, description }) => (
    <>
        <Header>
            <Logo value="netflixroulette" />
            <Title value="Find your movie" />
            <Search />
        </Header>
        <Content>
            <ErrorBox message={message} description={description} />
        </Content>
        <Footer>
            <Logo value="netflixroulette" />
        </Footer>
    </>
)

export default ErrorPage
