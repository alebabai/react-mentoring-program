import React from 'react'

export const SearchButton = ({ text = 'Search', onClick }) => (
    <button className="search-button" onClick={onClick}>{text}</button>
)

export default SearchButton
