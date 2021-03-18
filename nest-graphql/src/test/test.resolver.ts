import { Resolver, Query, Args } from '@nestjs/graphql';
import { Test } from './test';

const table = [{
  id: 'a',
  name: 'Alex'
}, {
  id: 'b',
  name: 'Bob'
}, {
  id: 'c',
  name: 'Cathy'
}];

@Resolver('Test')
export class TestResolver {
  @Query(returns => [Test])
  async test(): Promise<Test[]> {
    return table;
  }
}