const defaultState = {
    query: '',
    sortBy: undefined,
    sortOrder: 'asc',
    searchBy: undefined,
    filter: undefined,
    offset: undefined,
    limit: undefined,
}

export const search = (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'SEARCH_UPDATE_PARAMS':
            return { ...state, ...payload }
        default:
            return state;
    }
}

export default search
