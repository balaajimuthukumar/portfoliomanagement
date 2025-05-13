import { Component, OnInit } from '@angular/core';
import { PerformanceMetricsService } from '../../services/performancemetrics.service';
import { performanceData, performanceOptions } from '../../models/dashboard.model';


@Component({
  selector: 'app-performance-metrics',
  templateUrl: './performance-metrics.component.html',
  styleUrls: ['./performance-metrics.component.scss']
})
export class PerformanceMetricsComponent implements OnInit {
  public performanceData: any = performanceData;
  public performanceOptions = performanceOptions;

  constructor(private performanceMetricsService: PerformanceMetricsService) {}

  ngOnInit(): void {
    this.loadPerformanceData();
  }

  // Fetch the performance data from the service
  loadPerformanceData(): void {
    this.performanceMetricsService.getPerformanceData().subscribe(
      (data) => {
        this.performanceData = data;
      },
      (error) => {
        console.error('Error fetching performance data:', error);
      }
    );
  }
}
