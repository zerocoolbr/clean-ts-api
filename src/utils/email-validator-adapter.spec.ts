import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): Boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('should return false if validtor returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  test('should return true if validtor returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })
})
