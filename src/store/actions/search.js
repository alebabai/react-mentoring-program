export const updateSearchParams = params => ({
    type: '@SEARCH__UPDATE_PARAMS',
    payload: {
        ...params
    }
})
