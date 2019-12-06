import React from 'react'
import renderer from 'react-test-renderer'

import Logo from './Logo'


test('Should match snapshot', () => {
    const component = renderer.create(
        <Logo value="Logo" />,
    )
    expect(component.toJSON()).toMatchSnapshot()
})
