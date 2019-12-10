import React from 'react'

import style from './style.css'

export const SearchButton = ({ text }) => (
    <button type="submit" className={style.searchButton}>
        <p className={style.searchButtonText}>{text}</p>
    </button>
)

SearchButton.defaultProps = {
    text: 'Search',
}

export default SearchButton
