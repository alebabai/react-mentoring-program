export const updateFetchParams = params => ({
    type: '@FETCH__UPDATE_PARAMS',
    payload: {
        ...params
    }
})

export const resetFetchParams = () => ({
    type: '@FETCH__RESET_PARAMS',
})
