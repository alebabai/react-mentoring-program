import React from 'react'

import FilterTab from './FilterTab'

import styles from './style.css'

export const Filter = ({ title, activeTab, tabs, onTabChange }) => {
    const makeHandler = id => () => typeof onTabChange === 'function' && onTabChange(id)
    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <div className={styles.tabs}>
                {tabs.map(({ id, title }) => ({ id, title, onClick: makeHandler(id), active: activeTab === id })).map(FilterTab)}
            </div>
        </div>
    )
}

Filter.defaultProps = {
    title: 'Filter by',
    tabs: [],
}

export default Filter
