import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ManagementsComponent } from './main/management/managements-component/managements-component';
import { UsersComponent } from './main/management/users/users-component/users-component';
import { SettingsComponent } from './main/management/settings/settings-component/settings-component';
import { NavigationModule } from "../navigation/navigation.module";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    ManagementsComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavigationModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
