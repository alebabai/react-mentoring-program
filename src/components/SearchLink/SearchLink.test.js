import React from 'react'

import SearchLink from './SearchLink'

import renderer from 'react-test-renderer';

test('Should match snapshot', () => {
    const component = renderer.create(
        <SearchLink />
    )
    expect(component.toJSON()).toMatchSnapshot()
})
