import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './main/sidebarComponent/sidebar.component';
import { DashboardComponent } from './main/dashboard.component/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mercato-gato');
}
