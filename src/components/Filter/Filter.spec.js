import React from 'react'

import Filter from './Filter'

import renderer from 'react-test-renderer';

const props = {
    title: 'Filter by',
    tabs: [
        {
            id: 'title',
            title: 'Title',
        },
        {
            id: 'genre',
        },
        {
            id: 'release_date',
            title: 'Release date',
        },
    ],
    defaultActiveTab: 'genre',
}

describe('Should match snapshot', () => {
    test('with default props', () => {
        const component = renderer.create(
            <Filter />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    test('with all props', () => {
        const component = renderer.create(
            <Filter {...props} />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})

