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

export const Search = ({ query, updateParams, searchBy }) => (
    <div className="search">
        <SearchInput onChange={query => updateParams({ query })} value={query} />
        <SearchButton onClick={() => updateParams({ active: true })} />
        <Filter title="Search by" activeTab={searchBy} tabs={filterTabs} onTabChange={tabId => updateParams({ searchBy: tabId })} />
    </div>
)

export default Search
