import React from 'react'

export const MovieCover = ({ src, alt = 'No poster found' }) => (
    <img className="movie-cover-image" src={src} alt={alt} />
)

export default MovieCover
