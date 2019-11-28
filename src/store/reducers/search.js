const defaultState = {
    query: '',
    searchBy: 'title',
    active: false
}

export const search = (state = defaultState, { type, payload }) => {
    switch (type) {
        case '@SEARCH__UPDATE_PARAMS':
            return { ...state, ...payload }
        default:
            return state;
    }
}

export default search
