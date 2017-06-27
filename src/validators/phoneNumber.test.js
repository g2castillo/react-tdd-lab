import phoneNumberValidator from './phoneNumber'

describe('PhoneNumberValidator', () => {
    describe('on empty input', () => {
        it('should return undefined', () => {
            const result = phoneNumberValidator('')

            expect(result).toBeUndefined()
        })
    })

    describe('647-555-1212', () => {
        it('should return undefined')
    })

    describe('647 555 1212', () => {
        it('should return undefined')
    })

    describe('words', () => {
        it('should return an error')
    })

    describe('less than 10 digits', () => {
        it('should return an error')
    })

    describe('more than 10 digits', () => {
        it('should return an error')
    })
})
