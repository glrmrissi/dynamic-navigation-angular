import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from './navigation.service';
import { NavigationItem } from './navigation.data';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  styleUrls: ['./navigation.scss'],
  template: `
    <aside class="side-bar">
      <button (click)="toggleSidebar()" aria-hidden="false" aria-label="Example home icon" fontIcon="home">
      </button>
      <ul>
        <ng-container *ngFor="let item of navigation$ | async">
          <li *ngIf="item.type === 'basic'">
            <a [routerLink]="item.link">{{ item.title }}</a>
          </li>
          <li class="collapsable" *ngIf="item.type === 'collapsable'" (click)="item.expanded = !item.expanded">
            {{ item.title }} {{ item.expanded ? '-' : '+' }}
            <ul *ngIf="item.expanded">
              <li *ngFor="let child of item.children">
                <a [routerLink]="child.link">{{ child.title }}</a>
              </li>
            </ul>
          </li>
        </ng-container>
      </ul>
    </aside>
  `
})
export class SidebarComponent implements OnInit {
  navigation$!: Observable<NavigationItem[]>;

  constructor(private navigationService: NavigationService) { } 

  ngOnInit() {
    this.navigation$ = this.navigationService.navigation$;
  }

  toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}
