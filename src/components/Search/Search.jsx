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
        <SearchButton />
        <Filter title="Search by" defaultActiveTab={searchBy} tabs={filterTabs} onChange={tabId => updateParams({ searchBy: tabId })} />
    </div>
)

export default Search
