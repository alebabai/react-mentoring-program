import { connect } from 'react-redux'

import {
    loadOne,
    updateFetchParams,
    resetSearchParams,
} from 'store/actions'

import Component from './MoviePage'

const mapStateToProps = ({
    data: {
        item,
        items,
    },
    fetch: {
        sortBy,
        limit,
        offset,
        total,
    },
}) => ({
    item,
    items: items.filter(({ id }) => id !== item.id),
    sortBy,
    limit,
    offset,
    total,
})
const mapDispatchToProps = {
    loadOne,
    updateFetchParams,
    resetSearchParams,
}

export const MoviePage = connect(mapStateToProps, mapDispatchToProps)(Component)

export default MoviePage
