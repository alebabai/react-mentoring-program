import React from 'react'

import ErrorBox from './ErrorBox'

import renderer from 'react-test-renderer';

const props = {
    message: 'Something wrong',
    description: 'An error happened'
}

describe('Should match snapshot', () => {
    test('with default props', () => {
        const component = renderer.create(
            <ErrorBox />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    test('with all props', () => {
        const component = renderer.create(
            <ErrorBox {...props} />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
