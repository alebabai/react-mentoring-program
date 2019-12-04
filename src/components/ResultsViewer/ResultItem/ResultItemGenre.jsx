import React from 'react'

export const ResultItemGenres = ({ items = [] }) => (
    <p className="result-item-genres">{items.join(', ')}</p>
)

export default ResultItemGenres
