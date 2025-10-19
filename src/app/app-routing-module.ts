import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard-component/dashboard-component';
import { ManagementsComponent } from './main/management/managements-component/managements-component';
import { WatchlistComponent } from './main/watchlist/components/watchlist';
import { StaticPage } from './main/static-page/static-page';
import { AuthGuard } from '../guards/routing.guard';

const routes: Routes = 
[
  {
    path: 'static-page', component: StaticPage
  },
  { 
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
   },
  { 
    path: 'managements', component: ManagementsComponent, canActivate: [AuthGuard]
  },
  { 
    path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard]
  },
  { 
    path: '**', redirectTo: 'static-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
