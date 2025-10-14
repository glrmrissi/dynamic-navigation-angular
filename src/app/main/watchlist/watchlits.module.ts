import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { WatchlistComponent } from './components/watchlist';
import { MatTabsModule } from '@angular/material/tabs';
import { InOpening } from './components/in-opening/in-opening';
import { InActive } from './components/in-active/in-active';
import { Active } from './components/active/active';
@NgModule({
  declarations: [
    WatchlistComponent,
    InOpening,
    InActive,
    Active
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule
  ]
})
export class WatchlistModule { }