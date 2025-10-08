import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard-component/dashboard-component';
import { ManagementsComponent } from './main/management/managements-component/managements-component';

const routes: Routes = [
  { 
    path: 'dashboard', component: DashboardComponent
   },
  { 
    path: 'managements', component: ManagementsComponent
  },
  { 
    path: '**', redirectTo: 'managements'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
