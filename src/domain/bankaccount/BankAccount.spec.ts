import {GivenWhenThen} from '../../framework/GivenWhenThen'
import {guid} from '../../framework/Guid'
import {

} from './BankAccountCommands'
import {

} from './BankAccountEvents'
import {

} from '../../framework/Errors'

const GWT = GivenWhenThen(`${__dirname}/bankaccount`)

test('Create Bank Account', () =>
  GWT((Given, When, Then) => {
    const bankAccountId= guid()
    // No Given
    When(//We create a BankAccount)
    Then(//BankingAccount is created)
  }))

test('Deposit on a Bank account', () =>
  GWT((Given, When, Then) => {
    const bankAccountId= guid()

    Given(// A Created BankAccount)
    When(// We deposit 500)
    Then(// 500 has been deposite on bankAccount)
  }))

test('Invalid deposit on a Bank Account', () =>
  GWT((Given, When, Then) => {
    const bankAccountId= guid()

    Given(// A Created BankAccount)
    When(// We deposit 0)
    expect((): void => {
      Then(// The deposit with a amout of 0)
    }).toThrow(// a deposit amout of 0 is invalid)
  }))

test('WithDraw on a bank Account', () =>
  GWT((Given, When, Then) => {
    const bankAccountId= guid()

    Given(// A Created BankAccount,
      // We deposit 500
      )
    When(// We withdraw 150)
    Then(// 150 has been withdraw)
  }))

test('Invalid WithDraw', () =>
  GWT((Given, When, Then) => {
    const bankAccountId= guid()

    Given(// A Created BankAccount,
    // We deposit 500
    )
    When(// We withdraw 600)
    expect((): void => {
      Then(//The withdraw of 600)
    }).toThrow(// a withdraw of 600 when the balance is 500 is invalid )
  }))
