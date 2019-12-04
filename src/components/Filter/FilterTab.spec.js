import React from 'react'

import FilterTab from './FilterTab'

import renderer from 'react-test-renderer';

describe('Should match snapshot', () => {
    test('with all props', () => {
        const component = renderer.create(
            <FilterTab id="genres" title="Genres" active={true} onClick={() => { console.log('Tab clicked') }} />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('with partial props', () => {
        const component = renderer.create(
            <FilterTab id="genres" onClick={() => { console.log('Tab clicked') }} />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
