import React from 'react'

import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import SearchFilter from './SearchFilter'

const defaultCategories = [
    {
        fieldName: 'title',
        title: 'Title'
    },
    {
        fieldName: 'genre',
        title: 'Genre'
    },
]

export class Search extends React.PureComponent {
    render() {
        return (
            <div className="search">
                <SearchInput />
                <SearchButton />
                <SearchFilter categories={defaultCategories} />
            </div>
        )
    }
}

export default Search
