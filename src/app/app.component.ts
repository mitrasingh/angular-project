import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { MyFirstService } from './services/my-first.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MyFirstCompComponent,
    MenuComponent,
    AboutComponent,
  ],
  providers: [MyFirstService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
