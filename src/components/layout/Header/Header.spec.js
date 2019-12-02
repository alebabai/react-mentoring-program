import React from 'react'

import Header from './Header'

import renderer from 'react-test-renderer';

describe('Should match snapshot', () => {
    test('empty', () => {
        const component = renderer.create(
            <Header />
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    test('with children', () => {
        const component = renderer.create(
            <Header>
                <div className="wrapper-1">
                    <h1>Some title 1</h1>
                </div>
                <div className="wrapper-2">
                    <h1>Some title 2</h1>
                </div>
            </Header>
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})

