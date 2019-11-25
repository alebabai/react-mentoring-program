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

export class Search extends React.PureComponent {
    render() {
        return (
            <div className="search">
                <SearchInput />
                <SearchButton />
                <Filter title="Search by" defaultActiveTab="title" tabs={filterTabs} />
            </div>
        )
    }
}

export default Search
