import React from 'react'

const MovieMetaItem = ({ count, unit }) => (
    <div key={`${count}-${unit}`} className="movie-meta-item">
        <p className="movie-meta-item-count">{count}</p>
        <p className="movie-meta-item-unit">{unit}</p>
    </div>
)

export const MovieMeta = ({ items }) => (
    <div className="movie-meta">
        {items.map(MovieMetaItem)}
    </div>
)

MovieMeta.defaultProps = {
    items: [],
}

export default MovieMeta
