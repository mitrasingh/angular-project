import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css',
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit(): void {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }
}
