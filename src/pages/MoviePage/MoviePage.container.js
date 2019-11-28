import { connect } from 'react-redux'

import { loadOne } from 'store/actions/data'

import Component from './MoviePage'

const mapStateToProps = ({ data: { item, items } }) => ({ item, items })
const mapDispatchToProps = {
    loadOne
}

export const MoviePage = connect(mapStateToProps, mapDispatchToProps)(Component)

export default MoviePage
