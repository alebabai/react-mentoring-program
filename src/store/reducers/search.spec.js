import reducer from './search'

const defaultState = {
    query: '',
    searchBy: 'title',
    active: false
}

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
})

test('should handle update params action', () => {
    expect(
        reducer(defaultState, {
            type: '@SEARCH__UPDATE_PARAMS',
            payload: { query: 'Fight Club' }
        })
    ).toEqual({
        ...defaultState,
        query: 'Fight Club'
    })
})

test('should handle reset params action', () => {
    expect(
        reducer(defaultState, {
            type: '@SEARCH__RESET_PARAMS'
        })
    ).toEqual(defaultState)
})

