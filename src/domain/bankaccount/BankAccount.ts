import {AggregateRoot} from '../../framework/AggregateRoot'
import {
TestEvent
} from './BankAccountEvents'
import {

} from '../../framework/Errors'



export class BankAccount extends AggregateRoot {
  private name: string

  constructor(guid: string) {
    super()
    this.applyChange(new TestEvent(guid))
  }
  applyTestEvent(event: TestEvent): void {
    this._id = event.aggregateId
  }

}
