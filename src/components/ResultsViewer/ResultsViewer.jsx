import React from 'react'

import { Filter, Pagination } from 'components'

import ResultItem from './ResultItem'
import ResultsSummary from './ResultsSummary'
import ResultsEmpty from './ResultsEmpty'

import style from './style.css'

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

export const ResultsViewer = ({ showSummary, summaryText, items, sortBy, limit, offset, total, onParamsChange }) => (
    <div className={style.root}>
        <div className="results-header">
            {showSummary && <ResultsSummary number={items.length} text={summaryText} />}
            <Filter title="Sort by" activeTab={sortBy} tabs={filterTabs} onTabChange={tabId => onParamsChange({ sortBy: tabId })} />
        </div>
        <div className={style.content}>
            {items.length ? items.map(ResultItem) : <ResultsEmpty />}
        </div>
        <Pagination current={Math.floor(offset / limit) || 1} pages={Math.floor(total / limit) - 1 || 1} onPageChange={(page) => onParamsChange({ offset: page * limit })} />
    </div>
)

ResultsViewer.defaultProps = {
    showSummary: true,
    items: [],
}

export default ResultsViewer
