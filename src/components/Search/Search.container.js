import { connect } from 'react-redux'

import { updateParams } from 'store/actions/search'

import Component from './Search'

const mapStateToProps = ({ search: { query } }) => ({ query })
const mapDispatchToProps = {
    updateQuery: (query) => updateParams({ query })
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Search
