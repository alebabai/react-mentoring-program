import React from 'react'
import renderer from 'react-test-renderer'

import FilterTab from './FilterTab'


describe('Should match snapshot', () => {
    test('with all props', () => {
        const component = renderer.create(
            <FilterTab id="genres" title="Genres" active onClick={() => 'Tab clicked'} />,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
    test('with partial props', () => {
        const component = renderer.create(
            <FilterTab id="genres" onClick={() => 'Tab clicked'} />,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
