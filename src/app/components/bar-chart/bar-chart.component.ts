import { Component, OnInit } from '@angular/core';
import { BuscarDadosService } from 'app/services/buscar-dados.service';
import { round } from 'app/utils/format';

interface SeriesData {
  name: string;
  data: number[];
}
interface ChartData {
  xaxis: {
    categories: string[];
  };
  series: SeriesData[];
}
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public chartOptions: ChartData = { xaxis: { categories: [] }, series: [] };
  plotOptions;
  loadingChart: boolean = false;
  constructor(private service: BuscarDadosService) {
    this.plotOptions = {
      bar: {
        horizontal: true,
      },
    };
  }

  ngOnInit(): void {
    this.service.carregarSaleSuccess().subscribe((res) => {
      const xaxis = res.map((xaxi) => xaxi.sellerName);
      const data = res.map((x) => round(100.0 * (x.deals / x.visited), 1));
      this.chartOptions.xaxis = { categories: xaxis };
      this.chartOptions.series = [{ name: '% Sucess', data: data }];
      this.loadingChart = true;
    });
  }
}
