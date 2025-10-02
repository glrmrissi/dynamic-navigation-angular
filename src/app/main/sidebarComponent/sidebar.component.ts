import { NavigationService } from '../../navigation/navigation.service';
import { NavItem } from '../../navigation/navigation';
import { Component, OnInit } from '@angular/core';
import { SidebarComponentModule } from './sidebar.component.module';

@Component({
  selector: 'app-sidebar',
  imports: [...SidebarComponentModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  items: NavItem[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.items = this.navigationService.getNavigation();
  }
}
