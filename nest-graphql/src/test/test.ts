import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}
