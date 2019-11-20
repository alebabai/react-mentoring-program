import React from 'react'

import ResultItem from './ResultItem'
import ResultsCount from './ResultsCount'
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

export const ResultsViewer = ({ items = [], categories = defaultCategories }) => (
    <div className="results-viewer">
        <div className="results-header">
            <ResultsCount value={items.length} />
            <ResultsSort categories={categories} />
        </div>
        <div className="results-body">
            {items.map(ResultItem) || <ResultsEmpty />}
        </div>
    </div>
)

export default ResultsViewer
