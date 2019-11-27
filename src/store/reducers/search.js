const defaultState = {
    query: '',
    sortBy: 'release_date',
    sortOrder: 'asc',
    searchBy: 'title',
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
