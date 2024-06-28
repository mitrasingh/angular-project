import { Component } from '@angular/core';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { MyFirstService } from './services/my-first.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyFirstCompComponent, MenuComponent, AboutComponent],
  providers: [MyFirstService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
