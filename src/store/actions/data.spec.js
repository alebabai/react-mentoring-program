import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { loadOne, loadMany } from './data'

const data = [{ id: '1', genres: [] }, { id: '2', genres: [] }, { id: '3', genres: [] }]
const apiMock = {
    getOne: (id) => Promise.resolve(data.find((item) => item.id === id)),
    getMany: () => Promise.resolve({
        items: data, offset: 0, limit: 10, total: data.length,
    }),
}
const mockStore = configureMockStore([
    thunk.withExtraArgument({ api: apiMock }),
])

let store

beforeEach(() => {
    store = mockStore({
        search: {
            query: '',
            searchBy: 'title',
            active: false,
        },
        fetch: {
            sortBy: 'release_date',
            sortOrder: 'asc',
            filter: undefined,
            offset: undefined,
            limit: undefined,
        },
        data: {
            item: {
                genres: [],
            },
            items: [],
        },
    })
})

test('Should create bunch of async actions to load one item', () => {
    store.dispatch(loadOne(data[0].id)).then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual('@DATA__REQUEST')
        expect(actions[1].type).toEqual('@DATA__LOADED_ONE')
        expect(actions[2].type).toEqual('@FETCH__UPDATE_PARAMS')
        expect(actions[3].type).toEqual('@DATA__REQUEST')
        expect(actions[4].type).toEqual('@DATA__LOADED_MANY')
        expect(actions[5].type).toEqual('@FETCH__UPDATE_PARAMS')
    })
})

test('Should create bunch of async actions to load many item', () => {
    store.dispatch(loadMany().then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual('@DATA__REQUEST')
        expect(actions[1].type).toEqual('@DATA__LOADED_MANY')
        expect(actions[2].type).toEqual('@FETCH__UPDATE_PARAMS')
    }))
})
