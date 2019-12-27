import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './Footer'


describe('Should match snapshot', () => {
    test('empty', () => {
        const component = renderer.create(
            <Footer />,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    test('with children', () => {
        const component = renderer.create(
            <Footer>
                <div className="wrapper-1">
                    <h1>Some title 1</h1>
                </div>
                <div className="wrapper-2">
                    <h1>Some title 2</h1>
                </div>
            </Footer>,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
