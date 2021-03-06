import reducer from './fetch'

const defaultState = {
    sortBy: 'release_date',
    sortOrder: 'asc',
    filter: undefined,
    limit: 15,
    offset: 0,
    total: 15,
}

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
})

test('should handle update params action', () => {
    expect(
        reducer(defaultState, {
            type: '@FETCH__UPDATE_PARAMS',
            payload: { sortBy: 'genres' },
        }),
    ).toEqual({
        ...defaultState,
        sortBy: 'genres',
    })
})

test('should handle reset params action', () => {
    expect(
        reducer(defaultState, {
            type: '@FETCH__RESET_PARAMS',
        }),
    ).toEqual(defaultState)
})
