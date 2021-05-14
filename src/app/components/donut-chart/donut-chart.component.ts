import { Component, OnInit } from '@angular/core';
import { BuscarDadosService } from 'app/services/buscar-dados.service';
interface ChartData {
  series: number[];
  labels: string[];
}

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements OnInit {
  chartData: ChartData = { series: [], labels: [] };
  loadingChart: boolean = false
  constructor(private service: BuscarDadosService) {}

  ngOnInit(): void {
    this.service.carregarSaleSum().subscribe((res) => {
      const myLabels = res.map((label) => label.sellerName);
      const mySeries = res.map((serie) => serie.sum);
      this.chartData.series = mySeries;
      this.chartData.labels = myLabels;
      this.loadingChart = true;
      // this.chartData = { labels: myLabels, series: mySeries };
    });
  }
}
