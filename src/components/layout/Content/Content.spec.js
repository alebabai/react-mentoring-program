import React from 'react'
import renderer from 'react-test-renderer'

import Content from './Content'


describe('Should match snapshot', () => {
    test('empty', () => {
        const component = renderer.create(
            <Content />,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    test('with children', () => {
        const component = renderer.create(
            <Content>
                <div className="wrapper-1">
                    <h1>Some title 1</h1>
                </div>
                <div className="wrapper-2">
                    <h1>Some title 2</h1>
                </div>
            </Content>,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
