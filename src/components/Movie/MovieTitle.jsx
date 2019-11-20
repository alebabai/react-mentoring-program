import React from 'react'

export const MovieTitle = ({ value, extra }) => (
    <>
        <p className="movie-title">{value}</p>
        <p className="movie-subtitle">{extra}</p>
    </>
)

export default MovieTitle
