import React from 'react'
import renderer from 'react-test-renderer'

import Title from './Title'


test('Should match snapshot', () => {
    const component = renderer.create(
        <Title value="Hello" />,
    )
    expect(component.toJSON()).toMatchSnapshot()
})
