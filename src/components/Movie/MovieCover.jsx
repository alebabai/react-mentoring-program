import React from 'react'

export const MovieCover = ({ src, alt }) => (
    <img className="movie-cover-image" src={src} alt={alt} />
)

MovieCover.defaultProps = {
    alt: 'No poster found',
}

export default MovieCover
