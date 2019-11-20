import React from 'react'

import styles from './styles.css'

export const SearchInput = ({ placeholder, value }) => (
    <input className={styles.searchInput} placeholder={placeholder} /*value={value}*/ />
)

export default SearchInput
