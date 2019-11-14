import React from 'react'

export const ResultItemImage = ({ src, alt = 'No poster found' }) => (
    <img className="result-item-image" src={src} alt={alt} />
)

export default ResultItemImage
