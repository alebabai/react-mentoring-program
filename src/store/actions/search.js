export const updateSearchParams = (params) => ({
    type: '@SEARCH__UPDATE_PARAMS',
    payload: {
        ...params,
    },
})

export const resetSearchParams = () => ({
    type: '@SEARCH__RESET_PARAMS',
})
