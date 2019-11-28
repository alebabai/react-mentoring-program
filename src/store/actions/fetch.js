export const updateFetchParams = params => ({
    type: '@FETCH__UPDATE_PARAMS',
    payload: {
        ...params
    }
})
