import React from 'react'
import classNames from 'classnames'

import style from './style.css'

export const FilterTab = ({ id, title = id, active, onClick }) => (
    <div key={id} className={classNames(style.tab, { [style.tabActive]: active })} onClick={onClick}>{title}</div>
)

export default FilterTab
