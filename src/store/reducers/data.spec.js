import reducer from './data'

const defaultState = {
    item: {
        genres: [],
    },
    items: [],
}

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
})

test('should handle load one action', () => {
    const item = { id: '123', genres: [] }
    expect(
        reducer(defaultState, {
            type: '@DATA__LOADED_ONE',
            payload: item
        })
    ).toEqual({
        ...defaultState,
        item,
    })
})

test('should handle load many action', () => {
    const items = [
        { id: '1', genres: [] },
        { id: '2', genres: [] }
    ]
    expect(
        reducer(defaultState, {
            type: '@DATA__LOADED_MANY',
            payload: items
        })
    ).toEqual({
        ...defaultState,
        items,
    })
})

