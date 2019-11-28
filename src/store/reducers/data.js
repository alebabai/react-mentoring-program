const defaultState = {
    item: {
        genres: []
    },
    items: [],
}

export const data = (state = defaultState, { type, payload }) => {
    switch (type) {
        case '@DATA__LOADED_ONE':
            return { ...state, item: { ...payload } }
        case '@DATA__LOADED_MANY':
            return { ...state, items: [...payload] }
        default:
            return state;
    }
}

export default data
