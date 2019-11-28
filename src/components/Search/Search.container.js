import { connect } from 'react-redux'

import { updateSearchParams } from 'store/actions/search'

import Component from './Search'

const mapStateToProps = ({ search }) => ({ ...search })
const mapDispatchToProps = {
    updateParams: updateSearchParams
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Search
