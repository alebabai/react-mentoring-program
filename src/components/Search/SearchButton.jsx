import React from 'react'

import styles from './styles.css'

export const SearchButton = ({ text }) => (
    <button type="submit" className={styles.searchButton}>
        <p className={styles.searchButtonText}>{text}</p>
    </button>
)

SearchButton.defaultProps = {
    text: 'Search',
}

export default SearchButton
