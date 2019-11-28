import { connect } from 'react-redux'

import { loadOne, updateFetchParams } from 'store/actions'

import Component from './MoviePage'

const mapStateToProps = ({ data: { item, items }, fetch: { sortBy } }) => ({ item, items, sortBy })
const mapDispatchToProps = {
    loadOne,
    updateFetchParams
}

export const MoviePage = connect(mapStateToProps, mapDispatchToProps)(Component)

export default MoviePage
