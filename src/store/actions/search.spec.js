import { updateSearchParams, resetSearchParams } from './search'

test('Should create action to update params', () => {
    const params = {
        query: 'Fight CLub',
        searchBy: 'title',
        active: false,
    }
    const expectedAction = {
        type: '@SEARCH__UPDATE_PARAMS',
        payload: params,
    }
    expect(updateSearchParams(params)).toEqual(expectedAction)
})

test('Should create action to reset params', () => {
    const expectedAction = {
        type: '@SEARCH__RESET_PARAMS',
    }
    expect(resetSearchParams()).toEqual(expectedAction)
})
