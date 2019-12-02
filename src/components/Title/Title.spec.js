import React from 'react'

import Title from './Title'

import renderer from 'react-test-renderer';

test('Should match snapshot', () => {
    const component = renderer.create(
        <Title value="Hello" />
    )
    expect(component.toJSON()).toMatchSnapshot()
})
