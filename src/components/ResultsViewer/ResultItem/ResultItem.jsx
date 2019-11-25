import React from 'react'

import ResultItemImage from './ResultItemImage'
import ResultItemTitle from './ResultItemTitle'
import ResultItemGenres from './ResultItemGenre'
import ResultItemReleaseDate from './ResultItemReleaseDate'

export const ResultItem = ({ id, imageUrl, title, genres, releaseDate }) => (
    <div key={id} className="result-item">
        <ResultItemImage src={imageUrl} />
        <ResultItemTitle value={title} />
        <ResultItemGenres items={genres} />
        <ResultItemReleaseDate value={releaseDate} />
    </div>
)

export default ResultItem
