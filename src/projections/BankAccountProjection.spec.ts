import {GivenWhenThen} from '../framework/GivenWhenThen'
import {

} from '../domain/bankaccount/BankAccountEvents'
import {BankAccountProjection} from './BankAccountProjection'

const GWT = GivenWhenThen(`${__dirname}/../domain/bankaccount`)

test('Collected historical transaction on BankAccount', () =>
  GWT((Given, When, Then, messageBus) => {
    const Banking = new BankAccountProjection(messageBus)

    Given(
      // We create a bank account,
      // We make a deposite of 600,
      // We withdraw 500
    )

    expect(//First line of Amout +600 and balance 600).toEqual('foo')
    expect(//Second line with -500 and balance 100).toEqual('bar')
  }))

