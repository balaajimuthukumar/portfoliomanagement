import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetAllocationService {
  getAssetAllocationData(): Observable<any> {
    const data = {
      labels: ['Stocks', 'Bonds', 'Real Estate', 'Commodities'],
      datasets: [
        {
          data: [30.49, 24.39, 30.49, 14.63],
          backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ff7043'],
          hoverOffset: 4
        }
      ]
    };
    return of(data);
  }
  getAssetComparisonData(): Observable<any> {
    const data = {
      labels: ['Stocks', 'Bonds', 'Real Estate'],
      datasets: [
        {
          label: 'Investment Amount',
          data: [5000, 3000, 2000],
          backgroundColor: '#42a5f5',
        }
      ]
    };
    return of(data);
  }  
}
