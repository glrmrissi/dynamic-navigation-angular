import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { WatchlistComponent } from './components/watchlist';
@NgModule({
  declarations: [
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class WatchlistModule { }