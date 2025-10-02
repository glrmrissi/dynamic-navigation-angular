import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './main/sidebarComponent/sidebar.component';
import { DashboardComponent } from './main/dashboard.component/dashboard.component';


export const SidebarComponentModule = [
    CommonModule,
    MatIconModule,
    RouterModule,
    SidebarComponent,
    DashboardComponent
]