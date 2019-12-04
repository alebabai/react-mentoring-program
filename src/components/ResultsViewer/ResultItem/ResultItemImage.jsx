import React from 'react'

export const ResultItemImage = ({ src, alt }) => (
    <img className="result-item-image" src={src} alt={alt} />
)

ResultItemImage.defaultProps = {
    alt: 'No poster found',
}

export default ResultItemImage
