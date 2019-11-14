import React from 'react'

const ResultsFilterCategory = ({ fieldName, title }) => (
    <div key={fieldName} className="results-filter-category">{title}</div>
)

export const ResultsFilter = ({ categories = [] }) => (
    <div className="results-filter">
        <h3>results by</h3>
        <div className="results-filter-categories">
            {categories.map(ResultsFilterCategory)}
        </div>
    </div>
)

export default ResultsFilter
