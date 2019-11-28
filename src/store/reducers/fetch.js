const defaultState = {
    sortBy: 'release_date',
    sortOrder: 'asc',
    filter: undefined,
    offset: undefined,
    limit: undefined,
}

export const fetch = (state = defaultState, { type, payload }) => {
    switch (type) {
        case '@FETCH__UPDATE_PARAMS':
            return { ...state, ...payload }
        default:
            return state;
    }
}

export default fetch
