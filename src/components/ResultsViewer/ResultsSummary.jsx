import React from 'react'

export const ResultsSummary = ({ number, text }) => (
    <div className="results-summary">
        <p className="results-meta">{text}</p>
        <p className="results-number">{number} movie(s) found</p>
    </div>
)

export default ResultsSummary
