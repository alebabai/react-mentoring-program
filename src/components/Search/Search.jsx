import React from 'react'

import { Filter } from 'components'

import SearchInput from './SearchInput'
import SearchButton from './SearchButton'

const filterTabs = [
    {
        id: 'title',
        title: 'Title',
    },
    {
        id: 'genre',
        title: 'Genre',
    },
]

export const Search = ({ query, onParamsUpdate, searchBy, onSearch }) => (
    <div className="search">
        <SearchInput placeholder="Search..." value={query} onChange={query => onParamsUpdate({ query })} onEnterKeyDown={onSearch} />
        <SearchButton onClick={onSearch} />
        <Filter title="Search by" activeTab={searchBy} tabs={filterTabs} onTabChange={tabId => onParamsUpdate({ searchBy: tabId })} />
    </div>
)

export default Search
