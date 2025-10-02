import { Injectable } from '@angular/core';
import { navigation, NavItem } from './navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getNavigation(): NavItem[] {
    return navigation;
  }
}
