import { Component } from '@angular/core';
import { WatchlistComponent } from '../watchlist';
import { WatchlistDTO } from '../../models/watchlist.dto';

@Component({
  selector: 'app-active',
  standalone: false,
  templateUrl: './active.html',
  styleUrls: ['./active.scss']
})
export class Active extends WatchlistComponent {
  override displayedColumns: (keyof WatchlistDTO)[] = ['whatsapp_url', 'business_name', 'user_name', 'pipeline_step'];

  override ngOnInit() {
    super.ngOnInit();
  }
}
