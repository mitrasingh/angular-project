import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'mitch',
      email: 'mitch@gmail.com',
      message: 'hello world',
    });
    this.insert({
      name: 'randy',
      email: 'randy@gmail.com',
      message: 'hello raiders',
    });
    this.insert({
      name: 'anthony',
      email: 'anthony@gmail.com',
      message: 'hello python',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
