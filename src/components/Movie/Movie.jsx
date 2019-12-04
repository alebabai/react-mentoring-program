import React from 'react'

import MovieCover from './MovieCover'
import MovieTitle from './MovieTitle'
import MovieRating from './MovieRating'
import MovieMeta from './MovieMeta'
import MovieDescription from './MovieDescription'

export const Movie = ({ id, imageUrl, title, tagline, description, rating, meta }) => (
    <div key={id} className="movie">
        <MovieCover src={imageUrl} />
        <MovieTitle value={title} extra={tagline} />
        <MovieRating value={rating} />
        <MovieMeta items={meta} />
        <MovieDescription value={description} />
    </div>
)

export default Movie
