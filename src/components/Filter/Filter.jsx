import React, { useState } from 'react'
import classNames from 'classnames'

const FilterTab = ({ id, title, active, handler }) => (
    <div key={id} className={classNames('filter-tab', { 'filter-tab-active': active })} onClick={() => handler(id)}>{title || id}</div>
)

export const Filter = ({ title, defaultActiveTab, tabs = [] }) => {
    const [activeTab, setState] = useState(defaultActiveTab)
    const handler = id => setState(id)
    return (
        <div className="filter">
            <p className="filter-title">{title}</p>
            <div className="filter-tabs">
                {tabs.map(tab => ({ ...tab, handler, active: activeTab === tab.id })).map(FilterTab)}
            </div>
        </div>
    )
}

export default Filter
