import { Routes } from '@angular/router';

export const routes: Routes = [
     { path: '/analytics', loadChildren: () => import('./main/sidebarComponent/sidebar.component.module').then(m => m.SidebarComponentModule as any) }
];