import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceTrendService {
  getPriceTrendData(): Observable<any> {
    const data = {
      labels: ['2025-01-01', '2025-02-01', '2025-03-01'],
      datasets: [
        {
          label: 'Stocks',
          data: [50, 52, 48],
          borderColor: '#42a5f5',
          fill: false,
          tension: 0.1
        }
      ]
    };
    return of(data);
  }
}
