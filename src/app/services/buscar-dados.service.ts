import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleSum } from 'app/types/sale';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { SalePage, SaleSuccess } from './../types/sale';

@Injectable({
  providedIn: 'root',
})
export class BuscarDadosService {
  constructor(private httpCli: HttpClient) {}
  baseUrl = environment.BASE_URL;
  proxima: number = 0;
  page: SalePage;
  carregarSaleSum(): Observable<SaleSum[]> {
    return this.httpCli.get<SaleSum[]>(
      `${this.baseUrl}/sales/amount-by-seller`
    );
  }

  carregarSaleSuccess(): Observable<SaleSuccess[]> {
    return this.httpCli.get<SaleSuccess[]>(
      `${this.baseUrl}/sales/success-by-seller`
    );
  }

  init(): void {
    this.httpCli
      .get<SalePage>(`${this.baseUrl}/sales?page=${this.proxima}`)
      .pipe(
        map((salePage) => {
          return {
            content: salePage.content,
            last: salePage.last,
            totalPages: salePage.totalPages,
            totalElements: salePage.totalElements,
            first: salePage.first,
            size: salePage.size,
            number: salePage.number,
            numberOfElements: salePage.numberOfElements,
            empty: salePage.empty,
          };
        })
      )
      .subscribe((res) => (this.page = res));
  }
  proximaPage(numPage: number) {
    this.proxima = numPage;
    this.init();
  }
}
