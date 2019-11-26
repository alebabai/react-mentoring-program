import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './style.css'

const FilterTab = ({ id, title = id, active, onClick }) => (
    <div key={id} className={classNames(styles.tab, { [styles.tabActive]: active })} onClick={onClick}>{title}</div>
)

export const Filter = ({ title = 'Filter by', defaultActiveTab, tabs = [] }) => {
    const [activeTab, setState] = useState(defaultActiveTab)
    const makeHandler = id => () => setState(id)
    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <div className={styles.tabs}>
                {tabs.map(({ id, title }) => ({ id, title, onClick: makeHandler(id), active: activeTab === id })).map(FilterTab)}
            </div>
        </div>
    )
}

export default Filter
