import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { PaginationComponent } from './components/pagination/pagination.component';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DataTableComponent,
    BarChartComponent,
    DonutChartComponent,
    HomeComponent,
    DashboardComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
