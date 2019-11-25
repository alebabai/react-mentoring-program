import React from 'react'

import { Filter } from 'components'

import ResultItem from './ResultItem'
import ResultsSummary from './ResultsSummary'

const filterTabs = [
    {
        id: 'release_date',
        title: 'Release date',
    },
    {
        id: 'rating',
        title: 'Rating',
    },
]

export const ResultsViewer = ({ isSearch = true, summary, items = [] }) => (
    <div className="results-viewer">
        <div className="results-header">
            {isSearch && <ResultsSummary number={items.length} text={summary} />}
            <Filter title="Sort by" defaultActiveTab="title" tabs={filterTabs} />
        </div>
        <div className="results-body">
            {items.map(ResultItem) || <ResultsEmpty />}
        </div>
    </div>
)

export default ResultsViewer
