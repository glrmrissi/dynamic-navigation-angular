import { NgModule } from "@angular/core";
import { NavigationService } from "./navigation.service";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from './navigation';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule, CommonModule],
  providers: [NavigationService],
  exports: [SidebarComponent]
})
export class NavigationModule {}
