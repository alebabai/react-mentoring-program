import React from 'react'

export const ResultsSummary = ({ number, text }) => (
    <div className="results-summary">
        <p className="results-number">{number} movie(s) found</p>
        <p className="results-meta">{text}</p>
    </div>
)

export default ResultsSummary
