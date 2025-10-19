import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ManagementsComponent } from './main/management/managements-component/managements-component';
import { UsersComponent } from './main/management/users/users-component/users-component';
import { SettingsComponent } from './main/management/settings/settings-component/settings-component';
import { NavigationModule } from "../navigation/navigation.module";
import { CommonModule } from '@angular/common';
import { WatchlistModule } from './main/watchlist/watchlits.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './main/dashboard/dashboard-component.module';
import { StaticPageModule } from './main/static-page/static-page.module';
import { Login } from './main/login/login';
import { Register } from './main/register/register';

@NgModule({
  declarations: [
    App,
    ManagementsComponent,
    UsersComponent,
    SettingsComponent,
    Login,
    Register,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule, 
    DashboardModule,
    WatchlistModule,
    StaticPageModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
