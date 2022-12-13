import {IRepository} from '../../framework/Repository'
import {BankAccount} from './BankAccount'
import {

  TestCommand,
} from './BankAccountCommands'

export class BankAccountCommandHandlers {
  constructor(private _repository: IRepository<BankAccount>) {}

  handleTestCommand(command: TestCommand): void {
    const bankAccount = new BankAccount(command.aggregateId)
    this._repository.save(bankAccount, -1)
  }

}
