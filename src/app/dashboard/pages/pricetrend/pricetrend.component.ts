import { Component, OnInit } from '@angular/core';
import { PriceTrendService } from '../../services/pricetrend.service';

@Component({
  selector: 'app-price-trend',
  templateUrl: './pricetrend.component.html'
})
export class PriceTrendComponent implements OnInit {
  public priceTrendData: any = {};
  public priceTrendOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price'
        }
      }
    }
  };

  constructor(private priceService: PriceTrendService) {}

  ngOnInit(): void {
    this.loadPriceTrendData();
  }

  loadPriceTrendData(): void {
    this.priceService.getPriceTrendData().subscribe(
      (response) => {
        // Safely assign the fetched data using Object.assign
        this.priceTrendData = Object.assign({}, response);
        console.log('Price Trend Data:', this.priceTrendData);
      },
      (error) => {
        console.error('Error fetching price trend data:', error);
      }
    );
  }
}
