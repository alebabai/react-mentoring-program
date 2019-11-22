import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './style.css'

const FilterTab = ({ id, title, active, handler }) => (
    <div key={id} className={classNames(styles.tab, { [styles.tabActive]: active })} onClick={() => handler(id)}>{title || id}</div>
)

export const Filter = ({ title, defaultActiveTab, tabs = [] }) => {
    const [activeTab, setState] = useState(defaultActiveTab)
    const handler = id => setState(id)
    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <div className={styles.tabs}>
                {tabs.map(({ id, title }) => ({ id, title, handler, active: activeTab === id })).map(FilterTab)}
            </div>
        </div>
    )
}

export default Filter
