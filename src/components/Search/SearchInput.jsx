import React from 'react'

import styles from './styles.css'

export const SearchInput = ({ placeholder, value, onChange, onEnterKeyDown }) => (
    <input onKeyDown={e => e.key === 'Enter' && onEnterKeyDown()} onChange={e => onChange(e.currentTarget.value)} className={styles.searchInput} placeholder={placeholder} value={value} />
)

export default SearchInput
