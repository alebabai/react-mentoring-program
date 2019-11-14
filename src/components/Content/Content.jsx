import React from 'react'

import ResultsViewer from '../ResultsViewer'

const mockedData = [{
    id: '1',
    imageUrl: null,
    title: 'Fight Club',
    genre: 'Action',
    releaseDate: '1995'
}]

export const Content = () => (
    <article className="content">
        <ResultsViewer items={mockedData}/>
    </article>
)

export default Content
