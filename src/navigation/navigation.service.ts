import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationItem, appNavigation } from './navigation.data';
import { Router, Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private _navigation = new BehaviorSubject<NavigationItem[]>(appNavigation);

  constructor(private router: Router) {} 

  get navigation$() {
    return this._navigation.asObservable();
  }

  setNavigation(navigation: NavigationItem[]) { 
    this._navigation.next(navigation);
  }

  getNavigation(): NavigationItem[] {
    return this._navigation.getValue();
  }

  addRoute(path: string, component: any) {
    const newRoute: Route = { path, component };
    const routes = this.router.config;
    this.router.resetConfig([...routes, newRoute]);
  }
}
