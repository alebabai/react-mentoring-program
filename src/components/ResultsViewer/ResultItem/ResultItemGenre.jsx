import React from 'react'

export const ResultItemGenres = ({ items }) => (
    <p className="result-item-genres">{items.join(', ')}</p>
)

ResultItemGenres.defaultProps = {
    items: [],
}

export default ResultItemGenres
