import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DashboardComponent } from './main/dashboard-component/dashboard-component';
import { ManagementsComponent } from './main/management/managements-component/managements-component';
import { UsersComponent } from './main/management/users/users-component/users-component';
import { SettingsComponent } from './main/management/settings/settings-component/settings-component';

@NgModule({
  declarations: [
    App,
    DashboardComponent,
    ManagementsComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
