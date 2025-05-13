import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
// // Asset Allocation (Pie Chart)
//   public assetAllocationData = {
//     labels: ['Stocks', 'Bonds', 'Real Estate', 'Commodities'],
//     datasets: [
//       {
//         data: [30.49, 24.39, 30.49, 14.63],
//         backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ff7043'],
//         hoverOffset: 4
//       }
//     ]
//   };

//   public assetAllocationOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'right' as 'top' | 'left' | 'right' | 'bottom' | 'center',
//       }
//     }
//   };


//   // Asset Comparison (Bar Chart)
//   public assetComparisonData = {
//     labels: ['Stocks', 'Bonds', 'Real Estate'],
//     datasets: [
//       {
//         label: 'Investment Amount',
//         data: [5000, 3000, 2000],
//         backgroundColor: '#42a5f5',
//       }
//     ]
//   };

//   public assetComparisonOptions = {
//     responsive: true,
//     scales: {
//       y: { beginAtZero: true }
//     }
//   };

  // Price Trend (Line Chart)
  public priceTrendData = {
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
}
