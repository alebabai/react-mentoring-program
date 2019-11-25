import React from 'react'

export const ResultItemGenres = ({ items = [] }) => (
    <h3 className="result-item-genres">{items.join(', ')}</h3>
)

export default ResultItemGenres
