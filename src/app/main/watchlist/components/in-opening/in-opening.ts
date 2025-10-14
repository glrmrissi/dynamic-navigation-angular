import { Component } from '@angular/core';
import { WatchlistComponent } from '../../components/watchlist';
import { WatchlistDTO } from '../../models/watchlist.dto';

@Component({
  selector: 'app-in-opening',
  standalone: false,
  templateUrl: './in-opening.html',
  styleUrls: ['./in-opening.scss']
})
export class InOpening extends WatchlistComponent {

  override displayedColumns: (keyof WatchlistDTO)[] = ['domain_code', 'business_name', 'user_name', 'pipeline_step'];

  override ngOnInit() {
    super.ngOnInit();
  }
}
