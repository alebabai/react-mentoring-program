import React from 'react'

import Link from './Link'
import Separator from './Separator'

import style from './style.css'

const generatePagingRange = ({ current, total, min = 1, size = 10 }) => {
    if (size > total) size = total
    let start = current - Math.floor(size / 2)
    start = Math.max(start, min)
    start = Math.min(start, min + total - size)
    return Array.from({ length: size }, (_, i) => start + i)
}

const generatePagingItems = ({ current, total, onClick }) => {
    const items = []
    const isSinglePage = total <= 1
    const isFirstPage = isSinglePage || current === 1
    const isLastPage = isSinglePage || current === total
    const isPagingRangeExceeded = total > 10
    const mediumPagingRange = generatePagingRange({ current, total })
    if (!isFirstPage && !mediumPagingRange.includes(1)) {
        items.push(<Link key={1} active={false} value={1} text="first" onClick={onClick} />)
        if (isPagingRangeExceeded) {
            items.push(<Separator key="first-separator" />)
        }
    }
    items.push(
        mediumPagingRange.map((i) => (
            <Link key={i} active={i === current} value={i} text={i} onClick={onClick} />
        )),
    )
    if (!isLastPage && !mediumPagingRange.includes(total)) {
        if (isPagingRangeExceeded) {
            items.push(<Separator key="last-separator" />)
        }
        items.push(<Link key={total} active={false} value={total} text="last" onClick={onClick} />)
    }
    return items
}

export const Pagination = ({ current, pages, onPageChange }) => (
    <div className={style.root}>
        {generatePagingItems({ current, total: pages, onClick: onPageChange })}
    </div>
)

Pagination.defaultProps = {
    current: 1,
    pages: 1,
}

export default Pagination
