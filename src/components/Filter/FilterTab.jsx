import React from 'react'
import classNames from 'classnames'

import styles from './style.css'

export const FilterTab = ({ id, title = id, active, onClick }) => (
    <div key={id} className={classNames(styles.tab, { [styles.tabActive]: active })} onClick={onClick}>{title}</div>
)

export default FilterTab
