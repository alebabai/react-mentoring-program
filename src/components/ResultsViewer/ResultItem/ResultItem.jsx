import React from 'react'

import ResultItemImage from './ResultItemImage'
import ResultItemTitle from './ResultItemTitle'
import ResultItemGenre from './ResultItemGenre'
import ResultItemReleaseDate from './ResultItemReleaseDate'

export const ResultItem = ({ id, imageUrl, title, genre, releaseDate }) => (
    <div key={id} className="result-item">
        <ResultItemImage src={imageUrl} />
        <ResultItemTitle value={title} />
        <ResultItemGenre value={genre} />
        <ResultItemReleaseDate value={releaseDate} />
    </div>
)

export default ResultItem
