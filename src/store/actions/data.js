import { updateFetchParams } from './fetch'

const requestData = options => ({
    type: '@DATA__REQUEST',
    payload: options
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

const transformItem = ({
    id,
    title,
    description,
    tagline,
    releaseDate,
    voteAverage,
    imageUrl,
    runtime,
    genres
}) => ({
    id,
    title,
    description,
    tagline,
    rating: voteAverage,
    releaseDate,
    imageUrl,
    genres,
    meta: [
        {
            count: new Date(releaseDate).getFullYear(),
            unit: 'year',
        },
        {
            count: runtime,
            unit: 'min',
        },
    ],
})

export const loadMany = () => (dispatch, getState, { api }) => {
    const { fetch, search } = getState()
    const options = search.active ? { ...fetch, ...search, search: search.query } : { ...fetch }
    dispatch(requestData(options))
    return api.getMany(options)
        .then(({ items, offset, limit, total }) => {
            dispatch(loadedMany(items))
            dispatch(updateFetchParams({ offset, limit }))//TODO perform re-calculation for pagination
        })
        .catch(error => dispatch(loadingError(error)))
}

export const loadOne = id => (dispatch, _, { api }) => {
    dispatch(requestData({ id }))
    return api.getOne(id)
        .then(transformItem)
        .then(item => {
            dispatch(loadedOne(item))
            dispatch(updateFetchParams({ filter: item.genres.join(',') }))
            dispatch(loadMany())
        })
        .catch(error => dispatch(loadingError(error)))
}
