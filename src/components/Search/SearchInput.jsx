import React from 'react'

import styles from './styles.css'

export const SearchInput = ({ placeholder, value, onChange }) => (
    <input onChange={e => onChange(e.currentTarget.value)} className={styles.searchInput} placeholder={placeholder} value={value} />
)

export default SearchInput
