import { updateFetchParams, resetFetchParams } from './fetch'

test('Should create action to update params', () => {
    const params = {
        sortBy: 'release_date',
        sortOrder: 'asc',
        filter: 'Action,Drama',
        offset: 0,
        limit: 15,
    }
    const expectedAction = {
        type: '@FETCH__UPDATE_PARAMS',
        payload: params,
    }
    expect(updateFetchParams(params)).toEqual(expectedAction)
})

test('Should create action to reset params', () => {
    const expectedAction = {
        type: '@FETCH__RESET_PARAMS',
    }
    expect(resetFetchParams()).toEqual(expectedAction)
})
