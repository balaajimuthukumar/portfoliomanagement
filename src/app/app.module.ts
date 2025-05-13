import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentComponent } from './investment/investment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartDirective } from './shared/directives/chart.directive';
import { Chart, ArcElement, Tooltip, Legend, PieController, BarController, BarElement,LineController, LineElement,PointElement, CategoryScale, LinearScale } from 'chart.js';
import { AssetAllocationComponent } from './dashboard/pages/asset-allocation/asset-allocation.component';
import { PriceTrendComponent } from './dashboard/pages/pricetrend/pricetrend.component';
import { PerformanceMetricsComponent } from './dashboard/pages/performance-metrics/performance-metrics.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';

Chart.register(ArcElement, Tooltip, Legend, PieController, CategoryScale, LinearScale, BarController, BarElement,LineController, LineElement,PointElement);

@NgModule({
  declarations: [
    AppComponent,
    InvestmentComponent,
    DashboardComponent,
    ChartDirective,
    AssetAllocationComponent,
    PriceTrendComponent,
    PerformanceMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
