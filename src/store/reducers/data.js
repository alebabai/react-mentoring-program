const defaultState = {
    item: undefined,
    items: []
}

export const data = (state = defaultState, { type, payload }) => {
    switch (type) {
        case '@DATA__LOAD_ONE':
            return { ...state, movies: [...payload.items] }
        case '@DATA__LOAD_MANY':
            return { ...state, item: { ...payload.item } }
        default:
            return state;
    }
}

export default data
