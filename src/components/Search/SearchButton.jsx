import React from 'react'

import styles from './styles.css'

export const SearchButton = ({ text = 'Search', onClick }) => (
    <button className={styles.searchButton} onClick={onClick}>
        <p className={styles.searchButtonText}>{text}</p>
    </button>
)

export default SearchButton
