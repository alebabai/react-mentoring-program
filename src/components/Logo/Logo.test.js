import React from 'react'

import Logo from './Logo'

import renderer from 'react-test-renderer';

test('Should match snapshot', () => {
    const component = renderer.create(
        <Logo value="Logo" />
    )
    expect(component.toJSON()).toMatchSnapshot()
})
