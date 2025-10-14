import { Component } from '@angular/core';
import { WatchlistComponent } from '../watchlist';
import { WatchlistDTO } from '../../models/watchlist.dto';

@Component({
  selector: 'app-in-active',
  standalone: false,
  templateUrl: './in-active.html',
  styleUrls: ['./in-active.scss'] 
})
export class InActive extends WatchlistComponent {
    override displayedColumns: (keyof WatchlistDTO)[] = ['id', 'business_name', 'user_name', 'pipeline_step'];
  
    override ngOnInit() {
      super.ngOnInit();
    }
}
