import { connect } from 'react-redux'

import { updateFetchParams } from 'store/actions/fetch'

import Component from './ResultsViewer'

const mapStateToProps = ({ fetch, data: { items } }) => ({ ...fetch, items })
const mapDispatchToProps = {
    updateParams: updateFetchParams
}

export const ResultsViewer = connect(mapStateToProps, mapDispatchToProps)(Component)

export default ResultsViewer
