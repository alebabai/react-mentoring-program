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

export const ResultsViewer = ({ showSummary = true, summaryText, items = [] }) => (
    <div className="results-viewer">
        <div className="results-header">
            {showSummary && <ResultsSummary number={items.length} text={summaryText} />}
            <Filter title="Sort by" defaultActiveTab={filterTabs[0].id} tabs={filterTabs} />
        </div>
        <div className="results-body">
            {items.map(ResultItem) || <ResultsEmpty />}
        </div>
    </div>
)

export default ResultsViewer
