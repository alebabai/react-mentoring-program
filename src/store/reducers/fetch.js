const defaultState = {
    sortBy: 'release_date',
    sortOrder: 'desc',
    filter: undefined,
    limit: 100,
    offset: 0,
    total: 0,
}

export const fetch = (state = defaultState, { type, payload }) => {
    switch (type) {
        case '@FETCH__UPDATE_PARAMS':
            return { ...state, ...payload }
        case '@FETCH__RESET_PARAMS':
            return defaultState
        default:
            return state;
    }
}

export default fetch
