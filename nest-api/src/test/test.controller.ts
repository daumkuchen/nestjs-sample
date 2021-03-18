import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { Test, Time } from './test.interface';

@Controller('test')
export class TestController {

  constructor(private readonly testService: TestService) { }

  // test
  // @Get()
  // listUsers(): Test[] {
  //   return this.testService.listTest();
  // }

  // @Get(':id')
  // getTest(@Param('id') id: string): Test {
  //   return this.testService.getTest(id);
  // }

  // time
  @Get()
  getTimeAll(): Time {
    return this.testService.getTimeAll();
  }

  @Get(':type')
  getTime(@Param('type') type: string): number | null {
    return this.testService.getTime(type);
  }

}