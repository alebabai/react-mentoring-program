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
        id: 'genres',
        title: 'Genres',
    },
]

export const Search = ({ query, onParamsUpdate, searchBy, onSearch }) => (
    <div className="search">
        <form onSubmit={e => { e.preventDefault(); onSearch() }}>
            <SearchInput placeholder="Search..." value={query} onChange={query => onParamsUpdate({ query })} />
            <SearchButton text="Search" />
            <Filter title="Search by" activeTab={searchBy} tabs={filterTabs} onTabChange={tabId => onParamsUpdate({ searchBy: tabId })} />
        </form>
    </div>
)

export default Search
