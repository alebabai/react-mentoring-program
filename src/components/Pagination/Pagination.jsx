import React from 'react'

import style from './style.css'

const Link = ({ value, onClick }) => (
    <button className={style.link} onClick={onClick}>{value}</button>
)

const generateLinks = ({ current, total, onClick }) => (
    [...Array(total).keys()]
        .map((v) => v + 1)
        .map((v) => <Link key={v} value={v} onClick={() => current !== v && onClick(v)} />)
)

export const Pagination = ({ current, pages, onPageChange }) => (
    <div className={style.root}>
        {generateLinks({ current, total: pages, onClick: onPageChange })}
    </div>
)

Pagination.defaultProps = {
    current: 1,
    pages: 1,
}

export default Pagination
