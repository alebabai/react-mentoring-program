import React from 'react'

const SearchFilterCategory = ({ fieldName, title }) => (
    <div key={fieldName} className="search-filter-category">{title}</div>
)

export const SearchFilter = ({ categories = [{fieldName:"", title:'as'}] }) => (
    <div className="search-filter">
        <h3>Search by</h3>
        <div className="search-filter-categories">
            {categories.map(SearchFilterCategory)}
        </div>
    </div>
)

export default SearchFilter
