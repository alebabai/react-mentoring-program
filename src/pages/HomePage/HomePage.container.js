import { connect } from 'react-redux'

import { loadMany, updateFetchParams, updateSearchParams } from 'store/actions'

import Component from './HomePage'

const mapStateToProps = ({
    data: {
        items,
    },
    search: {
        searchBy,
        query,
    },
    fetch: {
        sortBy,
    },
}) => ({
    items,
    searchBy,
    searchQuery: query,
    sortBy,
})
const mapDispatchToProps = {
    loadMany,
    updateSearchParams,
    updateFetchParams,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Component)

export default HomePage