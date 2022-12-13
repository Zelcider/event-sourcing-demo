import {Command} from '../../framework/Command'

export class TestCommand extends Command {
  constructor(
    public readonly aggregateId: string,
    public readonly name: string
  ) {
    super(-1)
  }
}

