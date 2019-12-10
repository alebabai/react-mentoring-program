import React from 'react'

import style from './style.css'

export const SearchInput = ({ placeholder, value, onChange }) => (
    <input onChange={e => onChange(e.currentTarget.value)} className={style.searchInput} placeholder={placeholder} value={value} />
)

export default SearchInput
