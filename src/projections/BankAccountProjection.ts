import {IMessageBus} from '../framework/IMessageBus'
import { TestEvent } from '../domain/bankaccount/BankAccountEvents'

export class BankAccountProjection {
  public test = {}

  constructor(private messageBus: IMessageBus) {
    messageBus.registerEventHandler(TestEvent, (e) => {
      const event = e as TestEvent
      this.test[event.aggregateId] = event
    })
  }
}
