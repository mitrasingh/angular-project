import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { MyFirstService } from './services/my-first.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstCompComponent],
  providers: [MyFirstService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
