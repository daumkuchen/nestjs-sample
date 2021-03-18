import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    TestModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
