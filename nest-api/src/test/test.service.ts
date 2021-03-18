import { Injectable } from '@nestjs/common';
import { Test, Time } from './test.interface';

@Injectable()
export class TestService {

  private readonly test: Test[] = [{
    id: 'a',
    name: 'Alex'
  }, {
    id: 'b',
    name: 'Bob'
  }, {
    id: 'c',
    name: 'Cathy'
  }];

  listTest(): Test[] {
    return this.test;
  }

  getTest(id: string): Test {
    return this.test.find(value => value.id === id);
  }

  getTimeAll(): Time {
    const d = new Date();
    const time: Time = {
      year: Number(d.getFullYear()),
      month: Number(d.getMonth() + 1),
      date: Number(d.getDate()),
      hour: Number(d.getHours()),
      minute: Number(d.getMinutes()),
      second: Number(d.getSeconds()),
    };
    return time;
  }

  getTime(type: string): number {
    const d = new Date();
    let val;
    switch (type) {
      case 'year':
        val = Number(d.getFullYear());
        break;
      case 'month':
        val = Number(d.getMonth() + 1);
        break;
      case 'date':
        val = Number(d.getDate());
        break;
      case 'hour':
        val = Number(d.getHours());
        break;
      case 'minute':
        val = Number(d.getMinutes());
        break;
      case 'second':
        val = Number(d.getSeconds());
        break;
      default:
        val = null;
    }
    return val;
  }

}