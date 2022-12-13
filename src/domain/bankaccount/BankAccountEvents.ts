import {Event} from '../../framework/Event'

export class TestEvent extends Event {
  constructor(
    public readonly aggregateId: string,
  ) {
    super(aggregateId)
  }
}

