const requestData = () => ({
    type: '@DATA__REQUEST'
})

const loadedOne = item => ({
    type: '@DATA__LOADED_ONE',
    payload: item
})

const loadedMany = items => ({
    type: '@DATA__LOADED_MANY',
    payload: items
})

const loadingError = error => ({
    type: '@DATA__LOADING_ERROR',
    payload: error,
    error: true
})

export const loadMany = options => (dispatch, _, { api }) => {
    dispatch(requestData())
    return api.getMany(options)
        .then(
            items => dispatch(loadedMany(items)),
            error => dispatch(loadingError(error))
        )
}

export const loadOne = id => (dispatch, getState, { api }) => {
    dispatch(requestData())
    return api.getOne(id)
        .then(item => {
            dispatch(loadedOne(item))
            const filter = genres.join(',')
            //TODO dispatch update search/fetch params with filter
            return api.getMany({ searchBy: 'genres', filter, sortBy: getState().fetch.sortBy })
        })
        .then(({ items, offset, limit, total }) => {
            //TODO dispatch update search/fetch params with offset, limit, total
            dispatch(loadedMany(items))
        })
        .catch(error => dispatch(loadingError(error)))
}
