export const updateParams = params => ({
    type: 'SEARCH_UPDATE_PARAMS',
    payload: {
        ...params
    }
})
