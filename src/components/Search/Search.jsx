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

export const Search = ({ query, updateQuery }) => (
    <div className="search">
        <SearchInput onChange={e => updateQuery(e.currentTarget.value)} value={query} />
        <SearchButton />
        <Filter title="Search by" defaultActiveTab="title" tabs={filterTabs} />
    </div>
)

export default Search
