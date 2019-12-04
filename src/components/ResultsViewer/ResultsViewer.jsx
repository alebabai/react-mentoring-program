import React from 'react'

import { Filter } from 'components'

import ResultItem from './ResultItem'
import ResultsSummary from './ResultsSummary'
import ResultsEmpty from './ResultsEmpty'

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

export const ResultsViewer = ({ showSummary, summaryText, items, sortBy, onParamsUpdate }) => (
    <div className="results-viewer">
        <div className="results-header">
            {showSummary && <ResultsSummary number={items.length} text={summaryText} />}
            <Filter title="Sort by" activeTab={sortBy} tabs={filterTabs} onTabChange={tabId => onParamsUpdate({ sortBy: tabId })} />
        </div>
        <div className="results-body">
            {items.length ? items.map(ResultItem) : <ResultsEmpty />}
        </div>
    </div>
)

ResultsViewer.defaultProps = {
    showSummary: true,
    items: [],
}

export default ResultsViewer
