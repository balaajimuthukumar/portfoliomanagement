import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceMetricsService {

  constructor() { }

  // Simulating an API call with Observable
  getPerformanceData(): Observable<any> {
    // Simulated data (You can replace this with an actual API call)
    const performanceData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Portfolio Performance',
          data: [100, 105, 110, 108, 115],
          borderColor: '#42a5f5',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Benchmark (S&P 500)',
          data: [100, 102, 108, 109, 112],
          borderColor: '#ff7043',
          fill: false,
          tension: 0.1
        }
      ]
    };

    // Simulate an API response with delay using 'of'
    return of(performanceData);
  }
}
