import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
    describe('has no props', () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<PhoneNumberInput />)
            expect(wrapper).toHaveLength(1)
        })

        it('renders like it did last summer', () => {
            const tree = renderer.create(
                <PhoneNumberInput />
            ).toJSON()
            expect(tree).toMatchSnapshot()
        })

        // Simulate an event using .simulate('blur')
        it('doesn\'t crash when blurred')

        // Change events wrap their new value like this: {target: {value: 'My new value'}}
        it('doesn\'t crash when changing')
    })

    describe('has value', () => {
        it('renders input field with value')
    })

    describe('has onChange', () => {
        describe('on change', () => {
            it('calls onChange with the new value')
        })
    })

    describe('has validator', () => {
        it('calls the validator function on blur', () => {
            const validator = jest.fn()
            const wrapper = shallow(<PhoneNumberInput validate={validator} />)
            wrapper.find('.ft-input').simulate('blur');

            expect(validator).toBeCalled()
        })

        describe('when value prop changes', () => {
            it('calls the validator with value')
        })

        describe('when input changes', () => {
            it('calls the validator with new value')
        })

        describe('when validator returns a string', () => {
            it('displays the error')
        })

        describe('when validator returns undefined', () => {
            it('does not show any error')
        })
    })
})
