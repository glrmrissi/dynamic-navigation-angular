import { Component } from '@angular/core';
import { DashboardComponentModule } from './dashboard.component.module';

@Component({
  selector: 'app-dashboard-component',
  imports: [...DashboardComponentModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
