import { Component, inject, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { WatchlistService } from '../watchlist.service';
import { WatchlistDTO } from '../models/watchlist.dto';

const elements_table: (keyof WatchlistDTO)[] = [
  'domain_code', 'business_name', 'user_name', 'total_invoices', 'total_accesses',
  'email', 'digital_certificate', 'pipeline_step', 'whatsapp_url', 'plan_name',
  'is_active', 'payment_date', 'onboarding_date'
];

const columnLabels: Record<keyof WatchlistDTO, string> = {
  domain_code: 'Código do Domínio',
  business_name: 'Nome da Empresa',
  user_name: 'Usuário',
  total_invoices: 'Total de Faturas',
  total_accesses: 'Acessos Totais',
  email: 'Email',
  digital_certificate: 'Certificado Digital',
  pipeline_step: 'Etapa do Pipeline',
  whatsapp_url: 'WhatsApp',
  plan_name: 'Plano',
  is_active: 'Ativo',
  payment_date: 'Data de Pagamento',
  onboarding_date: 'Data de Onboarding',
  id: '',
  plan_id: '',
  is_deleted: '',
  deleted_at: '',
  updated_at: '',
  created_at: ''
};

@Component({
  selector: 'app-watchlist',
  standalone: false,
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.scss'
})


export class WatchlistComponent {
  columnLabels = columnLabels;
  constructor(private watchlistService: WatchlistService) {}

  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: (keyof WatchlistDTO)[] = elements_table;
  dataSource = new MatTableDataSource<WatchlistDTO>([]);

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit() {
    this.displayedColumns = Object.keys(columnLabels) as (keyof WatchlistDTO)[];
    this.watchlistService.getConfig().subscribe((data) => {
      console.log(data);
      this.dataSource.data = Array.isArray(data) ? data : [data];
      // Wrap data in an array to match MatTableDataSource expected type
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
