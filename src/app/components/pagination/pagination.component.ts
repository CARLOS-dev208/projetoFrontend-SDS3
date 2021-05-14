import { Component, Input, OnInit } from '@angular/core';
import { BuscarDadosService } from 'app/services/buscar-dados.service';
import { SalePage } from 'app/types/sale';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() page: SalePage;
  constructor(private service: BuscarDadosService) {}

  ngOnInit(): void {}

  pagina(numPage: number) {
    this.service.proximaPage(numPage);
  }
}
