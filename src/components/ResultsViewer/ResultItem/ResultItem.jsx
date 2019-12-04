import React from 'react'

import { Link } from 'react-router-dom'

import ResultItemImage from './ResultItemImage'
import ResultItemTitle from './ResultItemTitle'
import ResultItemGenres from './ResultItemGenre'
import ResultItemReleaseDate from './ResultItemReleaseDate'

export const ResultItem = ({ id, imageUrl, title, genres, releaseDate }) => (
    <div key={id} className="result-item">
        <Link to={`/movies/${id}`}>
            <ResultItemImage src={imageUrl} />
        </Link>
        <ResultItemTitle value={title} />
        <ResultItemGenres items={genres} />
        <ResultItemReleaseDate value={new Date(releaseDate).getFullYear()} />

    </div>
)

export default ResultItem
