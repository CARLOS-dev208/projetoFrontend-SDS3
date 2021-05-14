import { Component, OnInit } from '@angular/core';
import { BuscarDadosService } from 'app/services/buscar-dados.service';
import { SalePage } from 'app/types/sale';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  today: number = Date.now();
  constructor(public service: BuscarDadosService) {}

  ngOnInit(): void {
    this.service.init();
  }
}
