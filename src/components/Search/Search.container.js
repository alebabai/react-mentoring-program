import { connect } from 'react-redux'

import { updateParams } from 'store/actions/search'

import Component from './Search'

const mapStateToProps = ({ search }) => ({ ...search })
const mapDispatchToProps = {
    updateParams
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Search
