import React from 'react'

import ResultItem from './ResultItem'
import ResultsSummary from './ResultsSummary'
import ResultsSort from './ResultsSort'

const defaultCategories = [
    {
        fieldName: 'title',
        title: 'Title'
    },
    {
        fieldName: 'genre',
        title: 'Genre'
    },
]

export const ResultsViewer = ({ isSearch = true, summary, items = [], categories = defaultCategories }) => (
    <div className="results-viewer">
        <div className="results-header">
            {isSearch && <ResultsSummary number={items.length} text={summary} />}
            <ResultsSort categories={categories} />
        </div>
        <div className="results-body">
            {items.map(ResultItem) || <ResultsEmpty />}
        </div>
    </div>
)

export default ResultsViewer
